import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // Importar appConfig

bootstrapApplication(AppComponent, appConfig) // Usar appConfig aquí
  .catch((err) => console.error(err));
