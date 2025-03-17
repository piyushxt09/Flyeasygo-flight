document.addEventListener('DOMContentLoaded', () => {
    const guestsInput = document.getElementById('guests-input');
    const popupOverlay = document.getElementById('popup-overlay');
    const addRoomButton = document.getElementById('add-room');
    const applyButton = document.getElementById('apply');
    const roomsContainer = document.getElementById('rooms-container');

    let roomCount = 1;

    // Show popup when input is clicked
    guestsInput.addEventListener('click', () => {
        popupOverlay.style.display = 'block';
    });

    // Prevent default form submission behavior on all buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();  // Prevent page reload
        });
    });

    // Add new room functionality
    addRoomButton.addEventListener('click', () => {
        roomCount++;
        const room = document.createElement('div');
        room.classList.add('room');
        room.setAttribute('data-room', roomCount);
        room.innerHTML = `
        <button type="button" class="remove-room">Remove</button>
        <div class="room-header">
            Room ${roomCount}
        </div>
        <div class="controls">
            <span>Adults</span>
            <div class="counter">
                <button type="button" class="decrease">-</button>
                <span class="count" data-type="adults">1</span>
                <button type="button" class="increase">+</button>
            </div>
        </div>
        <div class="controls">
            <span>Children</span>
            <div class="counter">
                <button type="button" class="decrease">-</button>
                <span class="count" data-type="children">0</span>
                <button type="button" class="increase">+</button>
            </div>
            <br>
        </div>
        <div class="child-ages"></div>
    `;

        roomsContainer.appendChild(room);
        addCounterListeners(room);
        addRemoveRoomListener(room);
    });

    // Apply button to update the input field with selected data
    applyButton.addEventListener('click', () => {
        const roomDetails = [];
        const rooms = document.querySelectorAll('.room');
        rooms.forEach(room => {
            const adults = room.querySelector('.count[data-type="adults"]').textContent;
            const children = room.querySelector('.count[data-type="children"]').textContent;
            roomDetails.push(`Room ${room.dataset.room}: ${adults} Adults, ${children} Children`);
        });
        guestsInput.value = roomDetails.join(' | ');
        popupOverlay.style.display = 'none';
    });

    // Function to add event listeners for counters and child age handling
    function addCounterListeners(room) {
        room.querySelectorAll('.counter').forEach(counter => {
            const decreaseButton = counter.querySelector('.decrease');
            const increaseButton = counter.querySelector('.increase');
            const countSpan = counter.querySelector('.count');
            const childAgesContainer = room.querySelector('.child-ages');

            decreaseButton.addEventListener('click', () => {
                let currentValue = parseInt(countSpan.textContent);
                if (currentValue > 0) {
                    countSpan.textContent = currentValue - 1;
                    if (countSpan.dataset.type === 'children') {
                        updateChildAgeDropdowns(childAgesContainer, currentValue - 1);
                    }
                }
            });

            increaseButton.addEventListener('click', () => {
                let currentValue = parseInt(countSpan.textContent);
                if (countSpan.dataset.type === 'adults' && currentValue < 10) {
                    countSpan.textContent = currentValue + 1;
                } else if (countSpan.dataset.type === 'children' && currentValue < 4) {
                    countSpan.textContent = currentValue + 1;
                }

                if (countSpan.dataset.type === 'children') {
                    updateChildAgeDropdowns(childAgesContainer, currentValue + 1);
                }
            });
        });
    }

    // Function to update child age dropdowns
    function updateChildAgeDropdowns(container, childCount) {
        container.innerHTML = '';  // Clear previous dropdowns
        const maxChildren = 4; // Limit to 4 children
        const finalChildCount = Math.min(childCount, maxChildren); // Ensure no more than 4 children

        for (let i = 0; i < finalChildCount; i++) {
            const ageDropdown = document.createElement('select');
            ageDropdown.innerHTML = `
                <option value="1">1 year old</option>
                <option value="2">2 years old</option>
                <option value="3">3 years old</option>
                <option value="4">4 years old</option>
                <option value="5">5 years old</option>
                <option value="6">6 years old</option>
                <option value="7">7 years old</option>
                <option value="8">8 years old</option>
                <option value="9">9 years old</option>
                <option value="10">10 years old</option>
                <option value="11">11 years old</option>
                <option value="12">12 years old</option>
                <option value="13">13 years old</option>
                <option value="14">14 years old</option>
                <option value="15">15 years old</option>
                <option value="16">16 years old</option>
                <option value="17">17 years old</option>
            `;
            container.appendChild(ageDropdown);
        }
    }

    // Function to add event listener for remove room button
    function addRemoveRoomListener(room) {
        const removeButton = room.querySelector('.remove-room');
        removeButton.addEventListener('click', () => {
            room.remove();
            roomCount--;
        });
    }

    // Attach counter listeners to the initial room
    addCounterListeners(document.querySelector('.room'));
});
