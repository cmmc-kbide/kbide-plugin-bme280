Blockly.Blocks["bme_begin"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("bme1", null, ["Plugin.BME280"], ["Plugin.BME280"]), "instance")
            .appendField("begin address")
            .appendField(new Blockly.FieldTextInput("0x76"), "ADDR")
            .appendField("(SDA")
            .appendField(new Blockly.FieldTextInput("21"), "SDA")
            .appendField(", SCL")
            .appendField(new Blockly.FieldTextInput("22"), "SCL")
            .appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['bme_get_temperature'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("bme1", null, ["Plugin.BME280"], ["Plugin.BME280"]), "instance")
            .appendField("read Temperature (*C : celsius degree)");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['bme_get_humidity'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("bme1", null, ["Plugin.BME280"], ["Plugin.BME280"]), "instance")
            .appendField("read Humidity (%RH)");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['bme_get_pressure'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("bme1", null, ["Plugin.BME280"], ["Plugin.BME280"]), "instance")
            .appendField("read Pressure (hPa)");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['bme_get_altitudey'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("bme1", null, ["Plugin.BME280"], ["Plugin.BME280"]), "instance")
            .appendField("read Altitude (meter)");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};