import BaseComponent from "sap/ui/core/UIComponent";
import { createDeviceModel } from "./model/models";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace jsonmodel
 */
export default class Component extends BaseComponent {

	public static metadata = {
		manifest: "json",
        interfaces: [
            "sap.ui.core.IAsyncContentCreation"
        ]
	};

	public init() : void {
		// call the base component's init function
		super.init();

        // set the device model
        this.setModel(createDeviceModel(), "device");

        // enable routing
        this.getRouter().initialize();

        var oData = {

  "Bike": [
    {
      "BikeId": "B001",
      "Model": "Trek Marlin 7",
      "Category": "Mountainbike",
      "Brand": "Trek",
      "Price": 1099,
      "Currency": "EUR",
      "Year": 2025,
      "InStock": true
    },
    {
      "BikeId": "B002",
      "Model": "Canyon Endurace CF 7",
      "Category": "Rennrad",
      "Brand": "Canyon",
      "Price": 2199,
      "Currency": "EUR",
      "Year": 2026,
      "InStock": true
    },
    {
      "BikeId": "B003",
      "Model": "Cube Kathmandu Hybrid",
      "Category": "E-Bike",
      "Brand": "Cube",
      "Price": 3499,
      "Currency": "EUR",
      "Year": 2026,
      "InStock": false
    },
    {
      "BikeId": "B004",
      "Model": "Specialized Sirrus X 3.0",
      "Category": "Fitnessbike",
      "Brand": "Specialized",
      "Price": 1249,
      "Currency": "EUR",
      "Year": 2025,
      "InStock": true
    },
    {
      "BikeId": "B005",
      "Model": "Woom 4",
      "Category": "Kinderrad",
      "Brand": "Woom",
      "Price": 569,
      "Currency": "EUR",
      "Year": 2026,
      "InStock": true
    }
  ]

                };
        //1. Möglichkeit
        //let oModel = new JSONModel(oData); //VV: Wir laden aus den Zeilen 29 bis 80
        
        //2. Möglichkeit
        let oModel = new JSONModel("/model/bikes.json"); //VV: Einmal laden wir Model hier und unter 3. in der manifest.json. (Um beides zu probieren.)
        this.setModel(oModel, "myData"); //VV: myData kommt aus der Component.ts und myData2 aus der manifest.json.

        //3. Möglichkeit: Wenn es in der manifest.json steht, dann brauchen wir es hier nicht mehr zu machen. (myData2). SCHAU IN DER VIEW, OB myData oder myData2.
	}
}