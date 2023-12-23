---
uid: Meadow.Foundation.Sensors.Distance.Hysrf05

---

| Hysrf05 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/InProgress-yellow" style="width: auto; height: -webkit-fill-available;" alt="Status badge: in-progress" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hysrf05) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hysrf05/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Distance.Hysrf05/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Distance.Hysrf05.svg?label=Meadow.Foundation.Sensors.Distance.Hysrf05" alt="NuGet Gallery for Meadow.Foundation.Sensors.Distance.Hysrf05" /></a> |

The **HY-SRF05** ultrasonic sensor uses sonar to determine distance to an object (like bats). It offers excellent non-contact range detection with high accuracy and stable readings in an easy-to-use package.

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hysrf05/Samples/) 

### Code Example

```csharp
Hysrf05 hYSRF05;

public override Task Initialize()
{
    hYSRF05 = new Hysrf05(
        device: Device, 
        triggerPin: Device.Pins.D05, 
        echoPin: Device.Pins.D06);
    hYSRF05.DistanceUpdated += HYSRF05_DistanceUpdated;

    return Task.CompletedTask;
}

public override Task Run()
{
    while (true)
    {
        // Sends a trigger signal
        hYSRF05.MeasureDistance();
        Thread.Sleep(500);
    }

    return Task.CompletedTask;
}

private void HYSRF05_DistanceUpdated(object sender, IChangeResult<Meadow.Units.Length> e)
{
    Console.WriteLine($"Distance is {e.New.Centimeters}cm");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hysrf05/Samples/Hysrf05_Sample)

### Wiring Example

The HY-SRF05 sensor has 5 pins, but you’ll only connect 4: power, ground, echo and trigger (out isn’t used).

<img src="../../API_Assets/Meadow.Foundation.Sensors.Distance.HYSRF05/HYSRF05_Fritzing.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />




