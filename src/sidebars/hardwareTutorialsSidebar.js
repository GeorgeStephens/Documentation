const hardwareTutorialsSidebar = [
    {
      // Electronics Tutorial
      type: "category",
      label: "Electronics Tutorial",
      link: {
        type: "doc",
        id: "Hardware/Tutorials/Electronics/index",
      },
      items: [
        "Hardware/Tutorials/Electronics/Prologue/Requirements/index",

        {
          // part 1
          type: "category",
          label: "Chapter 1 - Physics of Electricity",
          link: {
            type: "doc",
            id: "Hardware/Tutorials/Electronics/Part1/index",
          },
          items: [
            "Hardware/Tutorials/Electronics/Part1/Atoms/index",
            "Hardware/Tutorials/Electronics/Part1/Electrical_Current/index",
            "Hardware/Tutorials/Electronics/Part1/Electromagnetism/index",
            "Hardware/Tutorials/Electronics/Part1/Review/index",
          ],
        },

        {
          // part 2
          type: "category",
          label: "Chapter 2 - Amps, Volts, and Watts",
          link: {
            type: "doc",
            id: "Hardware/Tutorials/Electronics/Part2/index",
          },
          items: [
            "Hardware/Tutorials/Electronics/Part2/Amount_and_Force/index",
            "Hardware/Tutorials/Electronics/Part2/Amperage/index",
            "Hardware/Tutorials/Electronics/Part2/Voltage/index",
            "Hardware/Tutorials/Electronics/Part2/Wattage/index",
            "Hardware/Tutorials/Electronics/Part2/Source_Load_and_Ground/index",
            "Hardware/Tutorials/Electronics/Part2/Review/index",
          ],
        },

        {
          // part 3
          type: "category",
          label: "Chapter 3 - Current Types; AC & DC",
          link: {
            type: "doc",
            id: "Hardware/Tutorials/Electronics/Part3/index",
          },
          items: [
            "Hardware/Tutorials/Electronics/Part3/Current_Types/index",
            "Hardware/Tutorials/Electronics/Part3/Direct_Current/index",
            "Hardware/Tutorials/Electronics/Part3/Alternating_Current/index",
            "Hardware/Tutorials/Electronics/Part3/AC_Characteristics/index",
            "Hardware/Tutorials/Electronics/Part3/Review/index",
          ],
        },

        {
          // part 4
          type: "category",
          label: "Chapter 4 - Resistance & Ohm's Law",
          link: {
            type: "doc",
            id: "Hardware/Tutorials/Electronics/Part4/index",
          },
          items: [
            "Hardware/Tutorials/Electronics/Part4/Resistance/index",
            "Hardware/Tutorials/Electronics/Part4/Ohms_Law/index",
            "Hardware/Tutorials/Electronics/Part4/Calculating_Resistance/index",
            "Hardware/Tutorials/Electronics/Part4/Resistor_Power_Rating/index",
            "Hardware/Tutorials/Electronics/Part4/Series_Resistance/index",
            "Hardware/Tutorials/Electronics/Part4/Parallel_Resistance/index",
            "Hardware/Tutorials/Electronics/Part4/Reading_Resistors/index",
            "Hardware/Tutorials/Electronics/Part4/Resistor_Tolerance/index",
            "Hardware/Tutorials/Electronics/Part4/Resistor_Lab/index",
            "Hardware/Tutorials/Electronics/Part4/PullUp_PullDown_Resistors/index",
            "Hardware/Tutorials/Electronics/Part4/Review/index",
          ],
        },

        {
          // part 5
          type: "category",
          label: "Chapter 5 - DC Curcuit Basics",
          link: {
            type: "doc",
            id: "Hardware/Tutorials/Electronics/Part5/index",
          },
          items: [
            "Hardware/Tutorials/Electronics/Part5/DC_Circuits/index",
            "Hardware/Tutorials/Electronics/Part5/Kirchhoffs_Current_Law/index",
            "Hardware/Tutorials/Electronics/Part5/Kirchhoffs_Voltage_Law/index",
            "Hardware/Tutorials/Electronics/Part5/Voltage_Division/index",
            "Hardware/Tutorials/Electronics/Part5/Voltage_Divider_Practicals/index",
            "Hardware/Tutorials/Electronics/Part5/Resistive_Sensor_Lab/index",
            "Hardware/Tutorials/Electronics/Part5/Level_Shifting_Lab/index",
            "Hardware/Tutorials/Electronics/Part5/Circuit_Software/index",
            "Hardware/Tutorials/Electronics/Part5/Review/index",
          ],
        },

        {
          // part 6
          type: "category",
          label: "Chapter 6 - Semiconductors, Part 1: Diodes",
          link: {
            type: "doc",
            id: "Hardware/Tutorials/Electronics/Part6/index",
          },
          items: [
            "Hardware/Tutorials/Electronics/Part6/Semiconductors/index",
            "Hardware/Tutorials/Electronics/Part6/Silicon/index",
            "Hardware/Tutorials/Electronics/Part6/P-Type/index",
            "Hardware/Tutorials/Electronics/Part6/N-Type/index",
            "Hardware/Tutorials/Electronics/Part6/P-N_Junctions/index",
            "Hardware/Tutorials/Electronics/Part6/General_Diodes/index",
            "Hardware/Tutorials/Electronics/Part6/Light_Related_Diodes/index",
            "Hardware/Tutorials/Electronics/Part6/LEDs/index",
            "Hardware/Tutorials/Electronics/Part6/LED_Lab/index",
            "Hardware/Tutorials/Electronics/Part6/Diode_Logic_Lab/index",
            "Hardware/Tutorials/Electronics/Part6/Review/index",
          ],
        },

        "Hardware/Tutorials/Electronics/Part7/Transistors/index",
        "Hardware/Tutorials/Electronics/PartY_Other_Components/index",
        // "Hardware/Tutorials/Electronics/Notes",
      ],
    },
    {
      // PCB Design Tutorial
      type: "category",
      label: "PCB Design Tutorial",
      link: {
        type: "doc",
        id: "Hardware/Tutorials/PCB_Tutorial/index",
      },
      items: [
        "Hardware/Tutorials/PCB_Tutorial/Schematic_Design/index",
        "Hardware/Tutorials/PCB_Tutorial/PCB_Layout/index",
        "Hardware/Tutorials/PCB_Tutorial/PCB_Assembly/index",
        "Hardware/Tutorials/PCB_Tutorial/Project_Creation/index",
        "Hardware/Tutorials/PCB_Tutorial/Add_Meadow/index",
      ],
    },
  ];
  
  module.exports = hardwareTutorialsSidebar;
  