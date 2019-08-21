Blockly.JavaScript["bme_begin"] = function (block) {
    var text_addr = block.getFieldValue('ADDR');
    var text_sda = block.getFieldValue('SDA');
    var text_scl = block.getFieldValue('SCL');
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code =
`
#EXTINC
#include "Adafruit_Sensor.h" 
#include "Adafruit_BME280.h" 
#include "Wire.h"
#END
  
#VARIABLE
Adafruit_BME280 ${variable_instance};
#END

Wire1.begin(${text_sda}, ${text_scl});
if (!${variable_instance}.begin(${text_addr}, &Wire1)) {
    Serial.println("Could not find a valid BME280 sensor, check wiring!");
    while (1);
}
\n
`;
    return code;
};

Blockly.JavaScript['bme_get_temperature'] = function (block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_instance}.readTemperature()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['bme_get_humidity'] = function (block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_instance}.readHumidity()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['bme_get_pressure'] = function (block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_instance}.readPressure() / 100.0F`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['bme_get_altitudey'] = function (block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_instance}.readAltitude(1013.25)`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};