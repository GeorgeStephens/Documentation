---
uid: Meadow.Foundation.Displays.St7789

---

| St7789 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.TftSpi/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.TftSpi.svg?label=Meadow.Foundation.Displays.TftSpi" alt="NuGet Gallery for Meadow.Foundation.Displays.TftSpi" /></a> |

The **ST7789** is a display controller used to drive color displays over SPI using 12, 16 or 18 bbp. These displays require a backlight. These are typically paired with high pixel density displays, the most common being a 1.5" 240x240 display.

ST7789 displays typically use SPI mode 3, but you may find variants that require different modes.

The Meadow.Foundation ST7789 driver currently only supports 16bpp RGB565.

### Purchasing

You can get ST7789 displays from the following suppliers:

* [AliExpress](https://www.aliexpress.com/item/32880846744.html?src=google&src=google&albch=shopping&acnt=494-037-6276&isdl=y&slnk=&plac=&mtctp=&albbt=Google_7_shopping&aff_platform=google&aff_short_key=UneMJZVf&&albagn=888888&albcp=7386552844&albag=80241711349&trgt=539263010115&crea=en32880846744&netw=u&device=c&gclid=CjwKCAiA_MPuBRB5EiwAHTTvMVIDoaCOAdZ1ZLqQo8NbMrvi3cFQ7ODW4--DtZpMFRh41rKjV1cbqRoCDHgQAvD_BwE&gclsrc=aw.ds)
* [Ebay](https://ebay.to/2pokpFE)
* [Amazon](https://www.amazon.com/MakerFocus-Display-1-3inch-Interface-Routines/dp/B07P9X3L7M/ref=sr_1_1?keywords=ST7789&qid=1574063790&sr=8-1)

### Code Example

```csharp
MicroGraphics graphics;
St7789 display;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing ...");

    var spiBus = Device.CreateSpiBus();

    display = new St7789(
        spiBus: spiBus,
        chipSelectPin: Device.Pins.A03,
        dcPin: Device.Pins.A04,
        resetPin: Device.Pins.A05,
        width: 240, height: 240, colorMode: ColorMode.Format16bppRgb565);

    display.Clear(Color.AliceBlue);
    display.Show();

    graphics = new MicroGraphics(display)
    {
        Rotation = RotationType._90Degrees,
        IgnoreOutOfBoundsPixels = true
    };

    return base.Initialize();
}

public override Task Run()
{
    graphics.Clear(true);

    graphics.DrawRectangle(120, 0, 120, 220, Color.White, true);
    graphics.DrawRectangle(0, 0, 120, 20, Color.Red, true);
    graphics.DrawRectangle(0, 20, 120, 20, Color.Purple, true);
    graphics.DrawRectangle(0, 40, 120, 20, Color.Blue, true);
    graphics.DrawRectangle(0, 60, 120, 20, Color.Green, true);
    graphics.DrawRectangle(0, 80, 120, 20, Color.Yellow, true);
    graphics.DrawRectangle(0, 100, 120, 20, Color.Orange, true);

    graphics.Show();

    DisplayTest();

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Samples/ST7789_Sample)

### Wiring Example

 To wire a ST7789 to your Meadow board, connect the following:

| ST7789  | Meadow Pin |
|---------|------------|
| GND     | GND        |
| VCC     | 3V3        |
| SCL     | SCK        |
| SDA     | MOSI       |
| RESET   | D00        |
| DC      | D01        |

It should look like the following diagram:

![Wiring a ST7789 to a Meadow F7](../../API_Assets/Meadow.Foundation.Displays.Tft.ST7789/ST7789_Fritzing.png)
