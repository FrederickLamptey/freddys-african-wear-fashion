import "./UpdateForm.css"

function UpdateForm({ children, name, email }) {
    return (
      <form
        action=""
        className="updateForm"
      >
        <div className="fullName">
          <label>Full name</label>
          <input
            disabled
            defaultValue={name}
            name="fullName"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="email">
          <label>Email address</label>
          <input
            disabled
            defaultValue={email}
            name="email"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="nationality">
          <div className="flex items-center justify-between">
            <label htmlFor="nationality">Where are you from?</label>
            <img src="" alt="Country flag" className="h-5 rounded-sm" />
          </div>

          {children}
        </div>
        <div className="flex justify-end items-center gap-6">
          <button>Update profile</button>
        </div>
      </form>
    );
}

export default UpdateForm
