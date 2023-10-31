---
uid: Meadow.Foundation.Grove.Sensors.Motion.3-AxisDigitalAccelerometer16g
remarks: *content
---

| 3-AxisDigitalAccelerometer16g | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/3-AxisDigitalAccelerometer16g) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Motion.3-AxisDigitalAccelerometer_16g/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Motion.3-AxisDigitalAccelerometer_16g.svg?label=Meadow.Foundation.Grove.Sensors.Motion.3-AxisDigitalAccelerometer_16g" alt="NuGet Gallery for Meadow.Foundation.Grove.Sensors.Motion.3-AxisDigitalAccelerometer_16g" /></a> |
### Code Example

```csharp
ThreeAxisDigitalAccelerometer16g sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing");

    sensor = new ThreeAxisDigitalAccelerometer16g(Device.CreateI2cBus());
    sensor.SetPowerState(false, false, true, false, ThreeAxisDigitalAccelerometer16g.Frequencies.TwoHz);

    sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"Accel: [X:{result.New.X.MetersPerSecondSquared:N2}," +
            $"Y:{result.New.Y.MetersPerSecondSquared:N2}," +
            $"Z:{result.New.Z.MetersPerSecondSquared:N2} (m/s^2)]");
    };

    return Task.CompletedTask;
}

public override Task Run()
{
    sensor.StartUpdating(TimeSpan.FromMilliseconds(500));

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/3-AxisDigitalAccelerometer16g/Sample/3-AxisDigitalAccelerometer16g_Sample)

