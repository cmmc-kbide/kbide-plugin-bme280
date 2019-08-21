#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include "Adafruit_Sensor.h"
#include "Adafruit_BME280.h"
#include "Wire.h"

Adafruit_BME280 bme1;

void setup()
{
  Wire1.begin(21, 22);
  if (!bme1.begin(0x76, &Wire1)) {
      Serial.println("Could not find a valid BME280 sensor, check wiring!");
      while (1);
  }
  Serial.begin(115200);
}
void loop()
{
  Serial.print(((String("Temperature: ")+String((bme1.readTemperature())))));
  Serial.print(((String(" Humidity: ")+String((bme1.readHumidity())))));
  Serial.print(((String(" Pressure: ")+String((bme1.readPressure() / 100.0F)))));
  Serial.println(((String(" Altitude: ")+String((bme1.readAltitude(1013.25))))));
  delay(1000);
}
