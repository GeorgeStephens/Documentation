---
uid: Meadow.Foundation.Sensors.Atmospheric.Dht12
remarks: *content
---

| Dht12 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Dhtxx) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Dhtxx/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Dhtxx/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Dhtxx.svg?label=Meadow.Foundation.Sensors.Atmospheric.Dhtxx" alt="NuGet Gallery for Meadow.Foundation.Sensors.Atmospheric.Dhtxx" /></a> |

The DHT12 is a low-cost humidity and temperature sensor that communicates over the I2C bus. It measures humidity from 20 to 95% with an accuracy of +/- 5% relative humidity with a resolution of 0.1%. Temperature range is from -20 to 60 degrees celcius with an accuracy of +/- 0.5 degrees and a resolution of 0.1.

### Code Example

```csharp
Dht12? sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    sensor = new Dht12(Device.CreateI2cBus());

    var consumer = Dht12.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Observer: Temp changed by threshold; new temp: {result.New.Temperature?.Celsius:N2}C, old: {result.Old?.Temperature?.Celsius:N2}C");
        },
        filter: result =>
        {
            if (result.Old?.Temperature is { } oldTemp &&
                result.Old?.Humidity is { } oldHumidity &&
                result.New.Temperature is { } newTemp &&
                result.New.Humidity is { } newHumidity)
            {
                return ((newTemp - oldTemp).Abs().Celsius > 0.5 &&
                        (newHumidity - oldHumidity).Percent > 0.05);
            }
            return false;
        }
    );
    sensor.Subscribe(consumer);

    sensor.Updated += (object sender, IChangeResult<(Temperature? Temperature, RelativeHumidity? Humidity)> e) =>
    {
        Resolver.Log.Info($"  Temperature: {e.New.Temperature?.Celsius:N2}C");
        Resolver.Log.Info($"  Relative Humidity: {e.New.Humidity:N2}%");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    if (sensor == null) { return; }

    var conditions = await sensor.Read();
    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($"  Temperature: {conditions.Temperature?.Celsius:N2}C");
    Resolver.Log.Info($"  Relative Humidity: {conditions.Humidity?.Percent:N2}%");

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Dhtxx/Samples/Dht12_Sample)

### Wiring Example

To wire a DHT12 to your Meadow board, connect the following:

| DHT12   | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

<img src="../../API_Assets/Meadow.Foundation.Sensors.Atmospheric.Dht12/Dht12_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />
