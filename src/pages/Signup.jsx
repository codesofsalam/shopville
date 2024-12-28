const Signup = () => {
    return (
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Your Password"
            className="w-full p-4 border rounded-lg"
          />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Sign Up
          </button>
        </form>
      </div>
    );
  };
  
  export default Signup;
  