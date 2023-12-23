---
uid: Meadow.Foundation.ICs.IOExpanders.Ht16K33

---

| Ht16k33 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ht16k33) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ht16k33/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.Ht16k33/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.Ht16k33.svg?label=Meadow.Foundation.ICs.IOExpanders.Ht16k33" alt="NuGet Gallery for Meadow.Foundation.ICs.IOExpanders.Ht16k33" /></a> |

The **HT16K33** is an LED driver and key scanner. It can be used to drive up to 128 leds and is often found pre-assembled with 14-segment led displays. The HT16K33 is controlled via I2C.

### Code Example

```csharp
Ht16k33 ht16k33;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");
    ht16k33 = new Ht16k33(Device.CreateI2cBus());

    return base.Initialize();
}

public override async Task Run()
{
    int index = 0;
    bool on = true;

    while (true)
    {
        ht16k33.SetLed((byte)index, on);
        ht16k33.UpdateDisplay();
        index++;

        if (index >= 128)
        {
            index = 0;
            on = !on;
        }

        await Task.Delay(100);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ht16k33/Samples/Ht16k33_Sample)

### Wiring Example

 To wire a TM1637 to your Meadow board, connect the following:

| TM1637  | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

<img src="/API_Assets/Meadow.Foundation.ICs.IOExpanders.HT16K33/Ht16K33_Fritzing.png" />




