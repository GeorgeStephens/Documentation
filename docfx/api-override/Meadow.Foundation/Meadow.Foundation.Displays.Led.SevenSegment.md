---
uid: Meadow.Foundation.Displays.Led.SevenSegment
remarks: *content
---

| SevenSegment | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Led.SevenSegment) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Led.SevenSegment/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.Led.SevenSegment/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Led.SevenSegment.svg?label=Meadow.Foundation.Displays.Led.SevenSegment" alt="NuGet Gallery for Meadow.Foundation.Displays.Led.SevenSegment" /></a> |

A seven-segment display is a form of electronic display device used to show  decimal numbers. These displays are widely used in digital clocks, electronic meters, basic calculators, and other electronic devices that display numerical information.

The **SevenSegment** driver is used to represent a 7-segment display controlled via GPIO. 

The displays are simply a collection of single color leds in a pre-configured solutions. The segments are commonly referred to using letters, the top segment is **A**, and increase alphabetically as you move clockwise around the display. The center segment is **G** and the decimal or period is **dp**.

The pinouts vary from device to device, check the documentation to map the pinouts to a specific segment. The come in a wide selection of colors and may be common anode or common cathode.

<img src="../../API_Assets/Meadow.Foundation.Displays.Led.SevenSegment/SevenSegment.jpg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

### Purchasing

You can get 7-segment displays from the following supplier(s):

* [Digi-Key](https://www.digikey.ca/product-detail/en/kingbright-company-llc/SA05-11SRWA/754-1677-5-ND/3084460?utm_adgroup=&mkwid=sEc2Kbmrm&pcrid=311487093563&pkw=&pmt=&pdv=c&productid=3084460&slid=&gclid=Cj0KCQjw_5rtBRDxARIsAJfxvYA-QhkE8ReFOaIaxWxF3q54830jvZKy1GHBbQu0E68FXQ5fudSMumAaAvw_EALw_wcB)
* [Elmwood Electronics](https://elmwoodelectronics.ca/products/8546?variant=28162038787&currency=CAD&utm_campaign=gs-2019-02-19&utm_source=google&utm_medium=smart_campaign&gclid=Cj0KCQjw_5rtBRDxARIsAJfxvYCC-J_psvSkkcZ5TwJHb_jiCvhzJg8Qie0PYdPdpWE8i96i65x-A9oaAqrUEALw_wcB)

### Code Example

```csharp
SevenSegment sevenSegment;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    sevenSegment = new SevenSegment
    (
        portA: Device.CreateDigitalOutputPort(Device.Pins.D14),
        portB: Device.CreateDigitalOutputPort(Device.Pins.D15),
        portC: Device.CreateDigitalOutputPort(Device.Pins.D06),
        portD: Device.CreateDigitalOutputPort(Device.Pins.D07),
        portE: Device.CreateDigitalOutputPort(Device.Pins.D08),
        portF: Device.CreateDigitalOutputPort(Device.Pins.D13),
        portG: Device.CreateDigitalOutputPort(Device.Pins.D12),
        portDecimal: Device.CreateDigitalOutputPort(Device.Pins.D05),
        isCommonCathode: false
    );

    return base.Initialize();
}

public override Task Run()
{
    sevenSegment.SetDisplay(character: '1', showDecimal: true);

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Led.SevenSegment/Samples/SevenSegment_Sample)

### Wiring Example

To wire a Common Cathode Seven Segment Display (like the 5161AS) to your Meadow board, connect the following:

| SevenSegment   | Meadow Pin |
|----------------|------------|
| portA          | D14        |
| portB          | D15        |
| PortC          | D06        |
| PortD          | D07        |
| PortE          | D08        |
| PortF          | D13        |
| PortG          | D12        |
| portDecimal    | D05        |
| Common Cathode | GND        |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Displays.Led.SevenSegment/SevenSegment_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />




