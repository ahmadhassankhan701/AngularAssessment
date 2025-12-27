# AssessmentDashboard

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

## Demo and Screenshots

|                Short Menu                 |                Full Menu                |             Demo              |
| :---------------------------------------: | :-------------------------------------: | :---------------------------: |
| ![Short Menu](screenshots/short-menu.png) | ![Full Menu](screenshots/full-menu.png) | ![Demo](screenshots/demo.mp4) |

#

## Development server and JSON server

To install source code and start a local development server, run:

```bash
git clone https://github.com/ahmadhassankhan701/AngularAssessment.git
npm install
ng serve
```

To connect with mock backend i.e json server, run:

```bash
npx json-server --watch db.json --port 3000
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
