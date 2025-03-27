'use server';
import { revalidatePath } from 'next/cache';
import { auth, signIn, signOut } from './auth';
import { supabase } from './supabase';
import { getPurchases } from './data-service';

export async function signInAction() {
  await signIn('google', { redirectTo: '/account/profile' });
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' });
}

export async function deleteCartItem(cartItemId) {
  const session = await auth();
  if (!session) throw new Error('You must be logged in');

  const guestCartItems = await getPurchases(session?.user?.guestId);
  const guestPurchasesIds = guestCartItems.map((item) => item.id);

  if (!guestPurchasesIds.includes(cartItemId))
    throw new Error('You are not allowed to delete this item');

  const { error } = await supabase
    .from('purchases')
    .delete()
    .eq('id', cartItemId);

  if (error) throw new Error('Item could not be deleted');

  revalidatePath('/cart');
}
