# Hospital Management System Frontend

This repository contains the frontend code for a Hospital Management System Web Application, developed using **React.js**. This interface allows users to register, log in, browse available doctors, book appointments, and manage their appointment history. The frontend communicates with a backend API built using Node.js and Express.

## Features

- **User Authentication**: Allows users to sign up, log in, and log out securely.
- **Appointment Booking**: Users can select a department, view available doctors, and book an appointment.
- **Doctor Filtering**: Filter doctors based on departments to find the right specialist.
- **User-Friendly Forms**: Forms for registration, login, and appointment booking with validation.
- **Responsive Design**: Built with responsiveness in mind for mobile, tablet, and desktop users.

## Technologies Used

- **React.js**: Frontend JavaScript library for building user interfaces.
- **Axios**: To make HTTP requests to the backend.
- **React Router**: For navigation between pages.
- **React Toastify**: For displaying success and error notifications.
- **Tailwind CSS**: For responsive and modern styling.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/firdoush01/Hospital-Management-System-Frontend.git

   ```

2. Install dependencies:

   ```bash
   npm install
   ```


4. Start the frontend:

   ```bash
   npm run dev
   ```

   The app should now be running on `http://localhost:5173/`.



## Key Components

- **AppointmentForm**: Form for booking appointments, allowing users to select departments, doctors, and appointment dates.
- **Auth Forms (Login and Register)**: Forms to handle user authentication.
- **DoctorList**: Displays a list of doctors filtered by the selected department.
- **Header & Footer**: Persistent navigation and footer components.


## Contributing

Feel free to contribute by opening issues or submitting pull requests to improve this application.

## License

This project is licensed under the MIT License.
