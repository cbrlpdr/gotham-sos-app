# SOS Simulation App

A mobile app built with **React Native** and **Expo** that simulates an SOS alert system. Users can enter their name, phone number, and fetch their current location to simulate sending an emergency alert to a security team.  

> ⚠️ **Note:** This app is purely a simulation. No personal data or location is sent anywhere.

---

## Features

- Home screen with a **SOS button** to navigate to the form.
- Form to input:
  - Name
  - Phone number
  - Current location (via device GPS)
- Button to fetch the device's current location.
- Alert message confirming submission.
- Validation to ensure all fields are filled before sending.

---

## Screenshots

<p align="center">
  <img src="./assets/ss1.jpg" alt="Screenshot" width="200
  "/>
  <img src="./assets/ss2.jpg" alt="Screenshot" width="200
  "/>
  <img src="./assets/ss3.jpg" alt="Screenshot" width="200
  "/>
</p>

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/cbrlpdr/gotham-sos-app.git
````

2. Navigate to the project folder:

```bash
cd sos-simulation-app
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

4. Run the app with Expo:

```bash
npx expo start
```

---

## Usage

1. Open the app on your device or simulator.
2. Tap the **SOS button** on the home screen.
3. Fill in your **Name** and **Phone number**.
4. Press **Get Location** to simulate fetching your GPS coordinates.
5. Press **Send Info** to display an alert confirming submission.

---

## Technologies Used

* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)

---

## Notes

* This app does **not** actually send data to any server or external service.
* It is intended purely for demonstration or simulation purposes.
* Works best on a real device; location fetching may not work on some Android emulators.

