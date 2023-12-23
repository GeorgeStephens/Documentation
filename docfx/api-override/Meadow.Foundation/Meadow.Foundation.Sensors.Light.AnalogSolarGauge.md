---
uid: Meadow.Foundation.Sensors.Light.AnalogSolarGauge

---

| AnalogSolarGauge | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarGauge) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarGauge/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.AnalogSolarIntensityGauge/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.AnalogSolarIntensityGauge.svg?label=Meadow.Foundation.Sensors.Light.AnalogSolarIntensityGauge" alt="NuGet Gallery for Meadow.Foundation.Sensors.Light.AnalogSolarIntensityGauge" /></a> |

### Code Example

```csharp
AnalogSolarGauge solarGauge;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    solarGauge = new AnalogSolarGauge(Device, Device.Pins.A02, updateInterval: TimeSpan.FromSeconds(1));

    //==== classic .NET Event
    solarGauge.SolarIntensityUpdated += (s, result) => Resolver.Log.Info($"SolarIntensityUpdated: {result.New * 100:n2}%");
    
    //==== Filterable observer
    var observer = AnalogSolarGauge.CreateObserver(
        handler: result => Resolver.Log.Info($"Observer filter satisifed, new intensity: {result.New * 100:n2}%"),
        filter: result => {
            if (result.Old is { } old)
            {
                return (Math.Abs(result.New - old) > 0.05); // only notify if change is > 5%
            }
            return false;
        });
    solarGauge.Subscribe(observer);

    return Task.CompletedTask;
}

public override async Task Run()
{
    var result = await solarGauge.Read();
    Resolver.Log.Info($"Solar Intensity: {result * 100:n2}%");

    solarGauge.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarGauge/Samples/AnalogSolarGauge_Sample)

