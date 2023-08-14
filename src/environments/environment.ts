// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import 'zone.js/dist/zone-error';
export const environment = {
  production: false,

  apiUsuarios : 'https://www.ininbio.com/pruebasLocalesFull/principal.php',
  apiSensores : 'https://www.ininbio.com/pruebasLocalesFull/datos_Grafica.php',
  apiLogin : 'https://www.ininbio.com/pruebasLocalesFull/obtener_Usuarios.php',
  apiExcel : 'https://www.ininbio.com/pruebasLocalesFull/generar_Excel.php',
  apiRestContrasena : 'https://www.ininbio.com/pruebasLocalesFull/new_Contra.php',
  apiMezcalPDF : 'http://3.138.161.216:80/Catalogos/Catalogo_Vino.pdf',
  apiAlertas : 'https://www.ininbio.com/pruebasLocalesFull/alertas_App.php', 
  SECRET_KEY : 'Ininbio.TI2022?'
}; 

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
