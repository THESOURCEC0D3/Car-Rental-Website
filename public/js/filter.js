import {cars} from './data.js';
console.log(cars);

const carGrid = document.getElementById("car-grid");
const searchInput = document.getElementById("searchmake");
const minPriceInput = document.getElementById("min-price");
const maxPriceInput = document.getElementById("max-price");
// Note: Ensure you add id="type-filter" to your <select> in HTML
const typeFilter = document.getElementById("type-filter");


const formatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  minimumFractionDigits: 2, // Ensures .00 at the end
});

function displayCars(carList){
    carGrid.innerHTML = '';

    if(carList.length === 0){
        carGrid.innerHTML = `<div class="col-span-full py-20 text-center">
                <p class="text-xl text-gray-500">No cars match your search. Try different filters!</p>
            </div>
        `;
        return;
    }

    carList.forEach(car => {
      // 2. Format your price variable
      const formattedPrice = formatter.format(car.price);

      const card = `
        <div class="rounded-xl border border-transparent bg-white shadow-sm overflow-hidden h-full hover:shadow-lg transition-shadow duration-200 cursor-pointer flex flex-col gap-10">

            <div class="aspect-video overflow-hidden bg-gray-100">
                <img src="${car.image}" alt="${car.make} ${car.model}" class="h-full w-full object-cover hover:scale-105 transition-transform duration-300 rounded-xl">
            </div>

            <div class="p-2">

                <div class="flex items-center">

                    <div class="flex-1">

                        <h3 class="text-base sm:text-lg md:text-xl font-semibold text-gray-900">${car.make} ${car.model}</h3>

                        <p>${car.year} &middot ${car.type}</p>
                            
                    </div>

                    <span class="rounded-full px-2 sm:px-3 py-1 text-sm font-medium bg-green-100 text-green-800">available</span>

                </div>

                <div class="mt-3 sm:mt-4 flex items-center justify-between">
                    <div>
                        <p class="text-lg sm:text-xl md:text-2xl font-bold text-blue-600"> ${formattedPrice}</p>
                        <p class="text-sm sm:text-lg text-gray-600">Per day</p>
                    </div>
                    <div>
                        <button class="inline-flex items-center gap-2 justify-center rounded-lg font-medium bg-blue-600 px-3 sm:px-4 py-2 sm:py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition">
                        <!-- Calendar SVG Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                        Book Now
                        </button>
                        </div>
                    </div>
                </div>    

            </div>

        </div>
        `;

        carGrid.innerHTML += card;
    })
}

function applyFilters() {
    const query = (searchInput?.value || "").toLowerCase();
    const selectedType = typeFilter.value;
    const minPrice = parseFloat(minPriceInput.value) || 0;
    const maxPrice = parseFloat(maxPriceInput.value) || Infinity;

    const filtered = cars.filter(car => {
      // Match Search (Make or Model)
      const matchesSearch =
        car.make.toLowerCase().includes(query) ||
        car.model.toLowerCase().includes(query);

      // Match Type (if "All-Types" is selected, we show everything)
      const matchesType = selectedType === "All-Types" || car.type === selectedType;
      const matchesMinPrice = car.price >= minPrice;
      const matchesMaxPrice = car.price <= maxPrice;

      return matchesSearch && matchesType && matchesMinPrice && matchesMaxPrice;
    });

    displayCars(filtered);
}

searchInput.addEventListener('input', applyFilters);

minPriceInput.addEventListener('input', applyFilters);
maxPriceInput.addEventListener('input', applyFilters);

typeFilter.addEventListener("change", applyFilters);

displayCars(cars);
