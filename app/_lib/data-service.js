// import { eachDayOfInterval } from 'date-fns';
import { supabase } from './supabase';
import { notFound } from 'next/navigation';

/////////////
// GET

export async function getItem(id) {
  const { data, error } = await supabase
    .from('inventory')
    .select('*')
    .eq('id', id)
    .single();

  // For testing
  // await new Promise((res) => setTimeout(res, 1000));

  if (error) {
    console.error(error);
    notFound()
  }

  return data;
}

export async function getItemPrice(id) {
  const { data, error } = await supabase
    .from('inventory')
    .select('regularPrice, discount')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
  }

  return data;
}

export const getItems = async function () {
  const { data, error } = await supabase
    .from('inventory')
    .select('id, name, department, regularPrice, discount, image')
    .order('name');

  if (error) {
    console.error(error);
    throw new Error('Items could not be loaded');
  }

  return data;
};

// Guests are uniquely identified by their email address
export async function getGuest(email) {
  const { data, error } = await supabase
    .from('guests')
    .select('*')
    .eq('email', email)
    .single();

  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}

export async function getPurchase(id) {
  const { data, error, count } = await supabase
    .from('purchases')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Purchase could not get loaded');
  }

  return data;
}

export async function getPurchases(guestId) {
  const { data, error, count } = await supabase
    .from('purchases')
    // We actually also need data on the cabins as well. But let's ONLY take the data that we actually need, in order to reduce downloaded data.
    .select(
      'id, created_at, itemPrice, guestId, inventoryId, inventory(name, image, department, description)'
    )
    .eq('guestId', guestId)
    .order('created_at');

  if (error) {
    console.error(error);
    throw new Error('Purchases could not get loaded');
  }

  return data;
}

// export async function getBookedDatesByCabinId(cabinId) {
//   let today = new Date();
//   today.setUTCHours(0, 0, 0, 0);
//   today = today.toISOString();

//   // Getting all bookings
//   const { data, error } = await supabase
//     .from('bookings')
//     .select('*')
//     .eq('cabinId', cabinId)
//     .or(`startDate.gte.${today},status.eq.checked-in`);

//   if (error) {
//     console.error(error);
//     throw new Error('Bookings could not get loaded');
//   }

//   // Converting to actual dates to be displayed in the date picker
//   const bookedDates = data
//     .map((booking) => {
//       return eachDayOfInterval({
//         start: new Date(booking.startDate),
//         end: new Date(booking.endDate),
//       });
//     })
//     .flat();

//   return bookedDates;
// }

// export async function getSettings() {
//   const { data, error } = await supabase.from('Settings').select('*').single();

//   if (error) {
//     console.error(error);
//     throw new Error('Settings could not be loaded');
//   }

//   return data;
// }

// export async function getCountries() {
//   try {
//     const res = await fetch(
//       'https://restcountries.com/v2/all?fields=name,flag'
//     );
//     const countries = await res.json();
//     return countries;
//   } catch {
//     throw new Error('Could not fetch countries');
//   }
// }

/////////////
// CREATE

export async function createGuest(newGuest) {
  const { data, error } = await supabase.from('guests').insert([newGuest]);

  if (error) {
    console.error(error);
    throw new Error('Guest could not be created');
  }

  return data;
}

// export async function createBooking(newBooking) {
//   const { data, error } = await supabase
//     .from('bookings')
//     .insert([newBooking])
//     // So that the newly created object gets returned!
//     .select()
//     .single();

//   if (error) {
//     console.error(error);
//     throw new Error('Booking could not be created');
//   }

//   return data;
// }

/////////////
// UPDATE

// The updatedFields is an object which should ONLY contain the updated data
// export async function updateGuest(id, updatedFields) {
//   const { data, error } = await supabase
//     .from('guests')
//     .update(updatedFields)
//     .eq('id', id)
//     .select()
//     .single();

//   if (error) {
//     console.error(error);
//     throw new Error('Guest could not be updated');
//   }
//   return data;
// }

// export async function updateBooking(id, updatedFields) {
//   const { data, error } = await supabase
//     .from('bookings')
//     .update(updatedFields)
//     .eq('id', id)
//     .select()
//     .single();

//   if (error) {
//     console.error(error);
//     throw new Error('Booking could not be updated');
//   }
//   return data;
// }

// /////////////
// // DELETE

// export async function deleteBooking(id) {
//   const { data, error } = await supabase.from('bookings').delete().eq('id', id);

//   if (error) {
//     console.error(error);
//     throw new Error('Booking could not be deleted');
//   }
//   return data;
// }
