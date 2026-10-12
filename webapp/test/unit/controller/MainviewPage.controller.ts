/*global QUnit*/
import Controller from "jsonmodel/controller/Mainview.controller";

QUnit.module("Mainview Controller");

QUnit.test("I should test the Mainview controller", function (assert: Assert) {
	const oAppController = new Controller("Mainview");
	oAppController.onInit();
	assert.ok(oAppController);
});