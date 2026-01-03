<div id="modal-container" class="fixed inset-0 flex items-center justify-center hidden z-30">

        <div id="modalOverlay" class="fixed inset-0 bg-black/50 backdrop-blur-2xl z-30 cursor-pointer"></div>

        <div class="w-3/4 bg-white rounded-2xl flex flex-col gap-5 md:flex-row max-w-4xl relative z-50">

           <button id="closeModal" class="absolute top-1 right-4 z-[60] text-gray-400 hover:text-black text-2xl cursor-pointer">&times;</button>

            <div class="flex-1 bg-gray-800 text-white p-5 rounded-2xl space-y-5 flex flex-col justify-center relative z-50">
                <div id="signUpContent" class="flex flex-col justify-center items-center transition-opacity duration-500">
                    <h2 class="text-2xl font-bold mb-2">Welcome Back!</h2>
                    <p class="text-gray-300 mb-4">Don't have an account?</p>
                    <button class="border px-5 py-3 rounded-2xl shadow-gray-400 shadow-2xl cursor-pointer">Sign Up</button>
                </div>

                <div id="loginContent" class="flex flex-col justify-center items-center transition-opacity duration-500 hidden">
                    <h2 class="text-2xl font-bold mb-2">Hello, Welcome!</h2>
                    <p class="text-gray-300 mb-4">Already have an account?</p>
                    <button class="border px-5 py-3 rounded-2xl shadow-gray-400 shadow-2xl cursor-pointer">Login</button>
                </div>
            </div>

            <div id="form-container" class="flex relative flex-1 p-3">

                <form action="" id="signupForm" class="absolute inset-0 p-5 flex flex-col items-center justify-center transition-all duration-500 transform -translate-x-full opacity-0 pointer-events-none">
            <div class="w-full">
                <input type="text" placeholder="Enter your full name" id="name" class="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div class="w-full">
                <input type="email" placeholder="Enter your email" id="email" class="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div class="w-full">
                <input type="password" placeholder="Enter your password" id="password" class="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>

            <div class="flex gap-5 w-full justify-center items-center mt-3">
                <hr class="inline flex-1">
                <p class="">or sign Upn with:</p>
                <hr class="inline flex-1">
          </div>

          <div class="flex justify-center items-center p-5 gap-5">
            <a href="#">
                <div class="border p-2 rounded-full hover:bg-linear-to-b from-red-500 via-yellow-300 to-green-400">
                    <img src="../assets/icons/google.svg" class="size-6">
                </div>
            </a>

            <a href="#">
                <div class="border p-2 rounded-full hover:bg-linear-to-b from-blue-800 to-white">
                    <img src="../assets/icons/facebook-logo.svg" class="size-6">
                </div>
            </a>
            <!-- <a href="#"></a> -->
          </div>
          </form>

          <form action="" id="loginForm" class="flex-1 p-5 flex flex-col items-center justify-center">
            <div class="w-full">
                <input type="email" placeholder="Enter your email" class="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div class="w-full">
                <input type="password" placeholder="Enter your password" class="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>

            <div class="flex gap-5 w-full justify-center items-center mt-3">
                <hr class="inline flex-1">
                <p class="">or sign in with:</p>
                <hr class="inline flex-1">
          </div>

          <div class="flex justify-center items-center p-5 gap-5">
            <a href="#">
                <div class="border p-2 rounded-full hover:bg-linear-to-b from-red-500 via-yellow-300 to-green-400">
                    <img src="../assets/icons/google.svg" class="size-6">
                </div>
            </a>

            <a href="#">
                <div class="border p-2 rounded-full hover:bg-linear-to-b from-blue-800 to-white">
                    <img src="../assets/icons/facebook-logo.svg" class="size-6">
                </div>
            </a>
            <!-- <a href="#"></a> -->
          </div>
          </form> 

          

          </div>

        </div>
    </div>
