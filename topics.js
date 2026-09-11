/* ============================================================
   MPI EXAM — TOPIC DATABASE
   Subject: Microprocessor and Interfacing
   GTU Code: BE05000551

   MID-TERM SCOPE
   ------------------------------------------------------------
   Unit 1 : FULL
   Unit 3 : FULL
   Unit 4 : Assembly Language Programming Basics +
            Classification of Instructions
   Unit 5 : FULL
   Unit 6 : FULL
   ============================================================ */

const TOPICS = [

/* ============================================================
   UNIT 1
   ============================================================ */

{
    id: 1,
    unit: "Unit 1",
    title: "Introduction to Microprocessor",
    priority: "Must Prepare",

    body: `
        <h3>1. Introduction</h3>

        <p>
            A <strong>microprocessor</strong> is a programmable digital
            electronic device that performs arithmetic, logical,
            control and data-processing operations according to
            instructions stored in memory.
        </p>

        <p>
            It is commonly called the <strong>CPU on a single
            integrated circuit</strong>. A microprocessor receives
            data, processes it according to a program and produces
            the required output.
        </p>


        <h3>2. Basic Functions of a Microprocessor</h3>

        <ul>
            <li>Fetch instructions from memory.</li>
            <li>Decode the fetched instruction.</li>
            <li>Execute the instruction.</li>
            <li>Perform arithmetic operations.</li>
            <li>Perform logical operations.</li>
            <li>Transfer data between registers, memory and I/O.</li>
            <li>Control the operation of the complete system.</li>
        </ul>


        <h3>3. Basic Microprocessor System</h3>

        <div class="diagram">
<pre>
                 +----------------------+
                 |    Microprocessor    |
                 |                      |
                 |  +----------------+  |
                 |  | Registers      |  |
                 |  +----------------+  |
                 |  | ALU            |  |
                 |  +----------------+  |
                 |  | Control Unit   |  |
                 |  +----------------+  |
                 +----------+-----------+
                            |
             +--------------+--------------+
             |              |              |
        Address Bus      Data Bus      Control Bus
             |              |              |
        +----+----+    +----+----+    +----+----+
        | Memory  |    | Memory  |    |   I/O   |
        +---------+    +---------+    +---------+
</pre>
        </div>


        <h3>4. Major Operations</h3>

        <table>
            <tr>
                <th>Operation</th>
                <th>Description</th>
            </tr>

            <tr>
                <td>Fetch</td>
                <td>
                    Obtaining the instruction from memory.
                </td>
            </tr>

            <tr>
                <td>Decode</td>
                <td>
                    Determining what operation the instruction specifies.
                </td>
            </tr>

            <tr>
                <td>Execute</td>
                <td>
                    Performing the required operation.
                </td>
            </tr>

            <tr>
                <td>Store</td>
                <td>
                    Storing the generated result in a register or memory.
                </td>
            </tr>
        </table>


        <h3>5. Characteristics of a Microprocessor</h3>

        <ul>
            <li>Programmable device.</li>
            <li>High processing speed.</li>
            <li>Compact size.</li>
            <li>Low power consumption in modern designs.</li>
            <li>Performs arithmetic and logical operations.</li>
            <li>Can control external memory and I/O devices.</li>
            <li>Its operation depends on the instruction set.</li>
        </ul>


        <h3>6. Applications</h3>

        <ul>
            <li>Computers and laptops</li>
            <li>Industrial control systems</li>
            <li>Embedded systems</li>
            <li>Automobiles</li>
            <li>Communication equipment</li>
            <li>Measurement and instrumentation systems</li>
        </ul>


        <h3>7. Conclusion</h3>

        <p>
            Thus, a microprocessor acts as the processing and control
            unit of a digital system. It executes instructions,
            processes data and controls communication with memory
            and I/O devices.
        </p>
    `
},


{
    id: 2,
    unit: "Unit 1",
    title: "Components of Microprocessor — Registers, ALU, Control & Timing",
    priority: "Must Prepare",

    body: `
        <h3>1. Introduction</h3>

        <p>
            A microprocessor is made up of several functional blocks.
            The most important blocks are <strong>registers, ALU,
            control unit and timing/control circuits</strong>.
        </p>


        <h3>2. Block Diagram</h3>

        <div class="diagram">
<pre>
              +-----------------------------+
              |        MICROPROCESSOR       |
              |                             |
              |  +-----------------------+  |
              |  |      Registers        |  |
              |  +-----------+-----------+  |
              |              |              |
              |              v              |
              |       +-------------+       |
              |       |     ALU      |       |
              |       +------+------+       |
              |              |              |
              |              v              |
              |  +-----------------------+  |
              |  | Control & Timing Unit|  |
              |  +-----------------------+  |
              +-----------------------------+
</pre>
        </div>


        <h3>3. Registers</h3>

        <p>
            Registers are small, high-speed storage locations inside
            the processor. They temporarily store data, addresses,
            instructions and intermediate results.
        </p>

        <table>
            <tr>
                <th>Register Type</th>
                <th>Purpose</th>
            </tr>

            <tr>
                <td>Accumulator</td>
                <td>
                    Stores operands and results of many ALU operations.
                </td>
            </tr>

            <tr>
                <td>General-purpose registers</td>
                <td>
                    Store temporary data during program execution.
                </td>
            </tr>

            <tr>
                <td>Program Counter</td>
                <td>
                    Holds the address of the next instruction.
                </td>
            </tr>

            <tr>
                <td>Stack Pointer</td>
                <td>
                    Points to the top of the stack.
                </td>
            </tr>

            <tr>
                <td>Flag register</td>
                <td>
                    Stores status information generated by operations.
                </td>
            </tr>
        </table>


        <h3>4. ALU</h3>

        <p>
            <strong>ALU stands for Arithmetic Logic Unit.</strong>
            It performs arithmetic and logical operations.
        </p>

        <p><strong>Arithmetic operations:</strong></p>

        <ul>
            <li>Addition</li>
            <li>Subtraction</li>
            <li>Increment</li>
            <li>Decrement</li>
        </ul>

        <p><strong>Logical operations:</strong></p>

        <ul>
            <li>AND</li>
            <li>OR</li>
            <li>XOR</li>
            <li>Compare</li>
            <li>Rotate</li>
        </ul>


        <h3>5. Control Unit</h3>

        <p>
            The control unit controls the sequence in which
            operations are performed. It generates control signals
            required for fetching, decoding and executing instructions.
        </p>


        <h3>6. Timing Unit</h3>

        <p>
            The timing section synchronizes processor operations
            using clock signals. Each operation is divided into
            properly timed steps.
        </p>


        <h3>7. Importance</h3>

        <ul>
            <li>Registers provide fast temporary storage.</li>
            <li>ALU performs data processing.</li>
            <li>Control unit coordinates all operations.</li>
            <li>Timing circuits synchronize the operations.</li>
        </ul>


        <h3>8. Conclusion</h3>

        <p>
            Registers, ALU and control/timing circuits together form
            the fundamental processing blocks of a microprocessor.
            Their coordinated operation allows the processor to
            execute programs correctly.
        </p>
    `
},


{
    id: 3,
    unit: "Unit 1",
    title: "System Bus — Data, Address and Control Bus",
    priority: "Must Prepare",

    body: `
        <h3>1. Introduction</h3>

        <p>
            A <strong>system bus</strong> is a collection of electrical
            signal lines used for communication between the
            microprocessor, memory and I/O devices.
        </p>

        <p>
            The system bus is mainly divided into three buses:
            <strong>address bus, data bus and control bus</strong>.
        </p>


        <h3>2. System Bus Diagram</h3>

        <div class="diagram">
<pre>
             MICROPROCESSOR
                   |
       +-----------+-----------+
       |           |           |
       v           v           v
  Address Bus   Data Bus   Control Bus
       |           |           |
       +-----------+-----------+
                   |
             System Devices
          +--------+--------+
          |                 |
        Memory              I/O
</pre>
        </div>


        <h3>3. Address Bus</h3>

        <p>
            The address bus carries the address of the memory location
            or I/O device with which the processor wants to communicate.
        </p>

        <ul>
            <li>Generally unidirectional.</li>
            <li>Address originates from the processor.</li>
            <li>Used to select a particular memory or I/O location.</li>
            <li>The number of address lines determines addressable space.</li>
        </ul>


        <h3>4. Data Bus</h3>

        <p>
            The data bus carries actual data between the processor,
            memory and I/O devices.
        </p>

        <ul>
            <li>Generally bidirectional.</li>
            <li>Carries instructions and data.</li>
            <li>Data width affects the amount of data transferred at once.</li>
        </ul>


        <h3>5. Control Bus</h3>

        <p>
            The control bus carries signals that control and
            coordinate various operations of the system.
        </p>

        <p>Examples include:</p>

        <ul>
            <li>Read signal</li>
            <li>Write signal</li>
            <li>Interrupt signals</li>
            <li>Clock signal</li>
            <li>Reset signal</li>
        </ul>


        <h3>6. Comparison</h3>

        <table>
            <tr>
                <th>Bus</th>
                <th>Function</th>
                <th>Direction</th>
            </tr>

            <tr>
                <td>Address</td>
                <td>Transfers address</td>
                <td>Usually unidirectional</td>
            </tr>

            <tr>
                <td>Data</td>
                <td>Transfers data/instructions</td>
                <td>Bidirectional</td>
            </tr>

            <tr>
                <td>Control</td>
                <td>Transfers control signals</td>
                <td>Both directions depending on signal</td>
            </tr>
        </table>


        <h3>7. Importance</h3>

        <p>
            The three buses work together. The address bus identifies
            the required location, the control bus specifies the
            operation and the data bus transfers the actual information.
        </p>


        <h3>8. Conclusion</h3>

        <p>
            Therefore, the system bus provides the communication path
            between the microprocessor, memory and I/O devices.
            Address, data and control buses are essential for proper
            system operation.
        </p>
    `
},


{
    id: 4,
    unit: "Unit 1",
    title: "Microprocessor System with Bus Organization",
    priority: "High Priority",

    body: `
        <h3>1. Introduction</h3>

        <p>
            A microprocessor system consists of the processor,
            memory, input/output devices and the buses that connect
            these components.
        </p>

        <p>
            <strong>Bus organization</strong> defines how the
            processor communicates with memory and peripheral devices.
        </p>


        <h3>2. Basic Organization</h3>

        <div class="diagram">
<pre>
                     +----------------+
                     | Microprocessor |
                     +--------+-------+
                              |
          +-------------------+-------------------+
          |                   |                   |
          v                   v                   v
     Address Bus          Data Bus          Control Bus
          |                   |                   |
          +-------------------+-------------------+
                              |
                  +-----------+-----------+
                  |                       |
                  v                       v
             +---------+             +---------+
             | Memory  |             |   I/O   |
             +---------+             +---------+
</pre>
        </div>


        <h3>3. Address Communication</h3>

        <p>
            The processor places an address on the address bus.
            The selected memory or I/O device uses this address to
            determine whether it has been selected.
        </p>


        <h3>4. Data Communication</h3>

        <p>
            After the required device is selected, information is
            transferred through the data bus.
        </p>

        <ul>
            <li>During a read operation, data moves toward the processor.</li>
            <li>During a write operation, data moves from the processor.</li>
        </ul>


        <h3>5. Control Communication</h3>

        <p>
            Control signals determine the type and timing of operation.
            For example, a read signal indicates that the processor
            wants to obtain information from memory or I/O.
        </p>


        <h3>6. Advantages of Bus Organization</h3>

        <ul>
            <li>Provides systematic communication.</li>
            <li>Reduces direct connections between every component.</li>
            <li>Makes system expansion easier.</li>
            <li>Allows memory and I/O devices to share communication paths.</li>
        </ul>


        <h3>7. Conclusion</h3>

        <p>
            Bus organization provides an efficient communication
            structure for a microprocessor system. Address, data and
            control buses work together to perform every memory and
            I/O operation.
        </p>
    `
},


/* ============================================================
   UNIT 3
   ============================================================ */

{
    id: 5,
    unit: "Unit 3",
    title: "8085 Microprocessor Architecture",
    priority: "Must Prepare",

    body: `
        <h3>1. Introduction</h3>

        <p>
            The <strong>8085</strong> is an 8-bit microprocessor
            developed by Intel. It has an 8-bit data bus and a
            16-bit address bus, allowing it to address up to
            <strong>64 KB of memory</strong>.
        </p>


        <h3>2. Main Features of 8085</h3>

        <ul>
            <li>8-bit microprocessor.</li>
            <li>16-bit address bus.</li>
            <li>8-bit data bus.</li>
            <li>Can address 64 KB memory.</li>
            <li>Five hardware interrupt inputs.</li>
            <li>40-pin IC.</li>
            <li>Single +5 V supply.</li>
            <li>Supports serial I/O through SID and SOD.</li>
        </ul>


        <h3>3. 8085 Architecture</h3>

        <div class="diagram">
<pre>
                         8085 MICROPROCESSOR
        +------------------------------------------------+
        |                                                |
        |       +-----------------------------+          |
        |       |       Register Array        |          |
        |       | B  C  D  E  H  L            |          |
        |       +-------------+---------------+          |
        |                     |                          |
        |              +------v------+                   |
        |              | Accumulator |                   |
        |              +------+-------+                   |
        |                     |                          |
        |              +------v------+                   |
        |              |     ALU     |                   |
        |              +------+-------+                   |
        |                     |                          |
        |              +------v------+                   |
        |              | Flag Reg.   |                   |
        |              +-------------+                   |
        |                                                |
        |   Program Counter       Stack Pointer          |
        |                                                |
        |   Instruction Register / Decoder               |
        |                                                |
        |   Timing & Control Unit                       |
        |                                                |
        |   Interrupt Control                            |
        |                                                |
        |   Serial I/O Control                           |
        |                                                |
        +------------------------------------------------+
               |                 |                |
          Address Bus         Data Bus        Control
</pre>
        </div>


        <h3>4. Register Organization</h3>

        <p>
            8085 contains several registers used for storing
            temporary data, addresses and status information.
        </p>

        <table>
            <tr>
                <th>Register</th>
                <th>Function</th>
            </tr>

            <tr>
                <td>Accumulator</td>
                <td>Stores operands and ALU results.</td>
            </tr>

            <tr>
                <td>B, C, D, E, H, L</td>
                <td>General-purpose 8-bit registers.</td>
            </tr>

            <tr>
                <td>Program Counter</td>
                <td>Stores address of next instruction.</td>
            </tr>

            <tr>
                <td>Stack Pointer</td>
                <td>Stores address of top of stack.</td>
            </tr>

            <tr>
                <td>Flag Register</td>
                <td>Stores status flags.</td>
            </tr>
        </table>


        <h3>5. ALU</h3>

        <p>
            The ALU performs arithmetic and logical operations.
            The result of many ALU operations is stored in the
            accumulator and the status flags are updated.
        </p>


        <h3>6. Instruction Register and Decoder</h3>

        <p>
            The instruction register temporarily holds the fetched
            instruction. The instruction decoder determines the
            operation specified by that instruction.
        </p>


        <h3>7. Timing and Control Unit</h3>

        <p>
            This unit generates the necessary timing and control
            signals for internal and external operations.
        </p>


        <h3>8. Flags</h3>

        <p>
            The 8085 has five commonly used condition flags:
        </p>

        <table>
            <tr>
                <th>Flag</th>
                <th>Meaning</th>
            </tr>

            <tr>
                <td>S</td>
                <td>Sign flag</td>
            </tr>

            <tr>
                <td>Z</td>
                <td>Zero flag</td>
            </tr>

            <tr>
                <td>AC</td>
                <td>Auxiliary Carry</td>
            </tr>

            <tr>
                <td>P</td>
                <td>Parity flag</td>
            </tr>

            <tr>
                <td>CY</td>
                <td>Carry flag</td>
            </tr>
        </table>


        <h3>9. Conclusion</h3>

        <p>
            The 8085 architecture combines registers, ALU,
            instruction decoding, timing/control logic, interrupt
            control and bus interfaces to execute instructions
            and communicate with external memory and I/O devices.
        </p>
    `
},


{
    id: 6,
    unit: "Unit 3",
    title: "Address, Data and Control Buses in 8085",
    priority: "Must Prepare",

    body: `
        <h3>1. Introduction</h3>

        <p>
            The 8085 communicates with memory and I/O devices using
            address, data and control signals.
        </p>


        <h3>2. Address Bus</h3>

        <p>
            The 8085 has a <strong>16-bit address bus</strong>.
            Therefore, it can generate addresses from:
        </p>

        <p class="formula">
            0000H to FFFFH
        </p>

        <p>
            Hence the maximum addressable memory is:
        </p>

        <p class="formula">
            2<sup>16</sup> = 65,536 bytes = 64 KB
        </p>


        <h3>3. Data Bus</h3>

        <p>
            The 8085 has an <strong>8-bit data bus</strong>.
            It transfers 8 bits of data at a time.
        </p>

        <p>
            The lower-order address lines AD7–AD0 are multiplexed
            with the data bus.
        </p>


        <h3>4. Control Bus</h3>

        <p>
            Control signals coordinate memory and I/O operations.
        </p>

        <table>
            <tr>
                <th>Signal</th>
                <th>Function</th>
            </tr>

            <tr>
                <td>RD̅</td>
                <td>Indicates read operation.</td>
            </tr>

            <tr>
                <td>WR̅</td>
                <td>Indicates write operation.</td>
            </tr>

            <tr>
                <td>IO/M̅</td>
                <td>Distinguishes memory and I/O operation.</td>
            </tr>

            <tr>
                <td>ALE</td>
                <td>Used to separate the lower address from AD7–AD0.</td>
            </tr>
        </table>


        <h3>5. Bus Organization</h3>

        <div class="diagram">
<pre>
                  8085
                    |
          +---------+---------+
          |                   |
       A15-A8             AD7-AD0
          |                   |
     Higher Address       Lower Address
                              |
                             ALE
                              |
                        +-----+-----+
                        |           |
                    Address       Data
                    Latch          Bus
</pre>
        </div>


        <h3>6. Important Point</h3>

        <p>
            AD7–AD0 are multiplexed because the same eight pins are
            used first for the lower-order address and later for
            data. ALE is used to latch the lower-order address.
        </p>


        <h3>7. Conclusion</h3>

        <p>
            The 8085 uses a 16-bit address bus, 8-bit data bus and
            several control signals to communicate efficiently with
            memory and I/O devices.
        </p>
    `
},


{
    id: 7,
    unit: "Unit 3",
    title: "8085 Pin Functions",
    priority: "Must Prepare",

    body: `
        <h3>1. Introduction</h3>

        <p>
            The 8085 is a <strong>40-pin microprocessor</strong>.
            Its pins are grouped according to their functions.
        </p>


        <h3>2. Pin Groups</h3>

        <ul>
            <li>Address and data lines</li>
            <li>Control and status signals</li>
            <li>Interrupt signals</li>
            <li>DMA signals</li>
            <li>Clock signals</li>
            <li>Serial I/O signals</li>
            <li>Power supply and reset signals</li>
        </ul>


        <h3>3. Address and Data Pins</h3>

        <table>
            <tr>
                <th>Pins</th>
                <th>Function</th>
            </tr>

            <tr>
                <td>A15–A8</td>
                <td>Higher-order address lines.</td>
            </tr>

            <tr>
                <td>AD7–AD0</td>
                <td>
                    Multiplexed lower-order address and data lines.
                </td>
            </tr>
        </table>


        <h3>4. Control and Status Signals</h3>

        <table>
            <tr>
                <th>Signal</th>
                <th>Function</th>
            </tr>

            <tr>
                <td>ALE</td>
                <td>
                    Indicates that AD7–AD0 contain lower-order address.
                </td>
            </tr>

            <tr>
                <td>RD̅</td>
                <td>
                    Indicates a read operation.
                </td>
            </tr>

            <tr>
                <td>WR̅</td>
                <td>
                    Indicates a write operation.
                </td>
            </tr>

            <tr>
                <td>IO/M̅</td>
                <td>
                    Indicates memory or I/O operation.
                </td>
            </tr>

            <tr>
                <td>S0, S1</td>
                <td>
                    Status signals used with IO/M̅ to identify machine-cycle type.
                </td>
            </tr>
        </table>


        <h3>5. Interrupt Pins</h3>

        <table>
            <tr>
                <th>Signal</th>
                <th>Function</th>
            </tr>

            <tr>
                <td>TRAP</td>
                <td>Highest-priority hardware interrupt.</td>
            </tr>

            <tr>
                <td>RST 7.5</td>
                <td>Maskable hardware interrupt.</td>
            </tr>

            <tr>
                <td>RST 6.5</td>
                <td>Maskable hardware interrupt.</td>
            </tr>

            <tr>
                <td>RST 5.5</td>
                <td>Maskable hardware interrupt.</td>
            </tr>

            <tr>
                <td>INTR</td>
                <td>General hardware interrupt request.</td>
            </tr>

            <tr>
                <td>INTA̅</td>
                <td>Interrupt acknowledge signal.</td>
            </tr>
        </table>


        <h3>6. Clock and Reset Pins</h3>

        <ul>
            <li><strong>X1, X2:</strong> clock/oscillator connections.</li>
            <li><strong>CLK OUT:</strong> clock output for external devices.</li>
            <li><strong>RESET IN̅:</strong> resets the processor.</li>
            <li><strong>RESET OUT:</strong> indicates reset status to peripherals.</li>
        </ul>


        <h3>7. DMA Signals</h3>

        <ul>
            <li><strong>HOLD:</strong> requests control of buses.</li>
            <li><strong>HLDA:</strong> indicates that the processor has released the buses.</li>
        </ul>


        <h3>8. Serial I/O</h3>

        <ul>
            <li><strong>SID:</strong> Serial Input Data.</li>
            <li><strong>SOD:</strong> Serial Output Data.</li>
        </ul>


        <h3>9. Conclusion</h3>

        <p>
            The 8085 pin configuration provides all signals required
            for address transfer, data transfer, control, interrupts,
            clocking, reset, DMA and serial communication.
        </p>
    `
},


{
    id: 8,
    unit: "Unit 3",
    title: "Demultiplexing of Buses",
    priority: "Must Prepare",

    body: `
        <h3>1. Introduction</h3>

        <p>
            In the 8085, the lines <strong>AD7–AD0</strong> are
            multiplexed. This means they carry lower-order address
            during one part of the machine cycle and data during
            another part.
        </p>

        <p>
            Therefore, these signals must be separated or
            <strong>demultiplexed</strong>.
        </p>


        <h3>2. Need for Demultiplexing</h3>

        <p>
            The 8085 has limited pins. To reduce the number of pins,
            the lower-order address bus and data bus share the same
            physical lines.
        </p>

        <p>
            However, memory requires the complete address separately.
            Therefore, an external latch is used.
        </p>


        <h3>3. Demultiplexing Diagram</h3>

        <div class="diagram">
<pre>
                 8085
                   |
                AD7-AD0
                   |
                   +------------------+
                   |                  |
                   v                  |
                +------+              |
 ALE ---------->|Latch |              |
                +------+              |
                   |                  |
                   v                  v
                A7-A0              D7-D0
             Lower Address           Data
</pre>
        </div>


        <h3>4. Role of ALE</h3>

        <p>
            <strong>ALE stands for Address Latch Enable.</strong>
            During the first T-state of a machine cycle, ALE becomes
            active and indicates that AD7–AD0 contain the lower-order
            address.
        </p>

        <p>
            The latch stores this lower-order address. After this,
            AD7–AD0 can be used as the data bus.
        </p>


        <h3>5. Operation</h3>

        <ol>
            <li>8085 places lower-order address on AD7–AD0.</li>
            <li>ALE becomes active.</li>
            <li>External latch stores the lower-order address.</li>
            <li>ALE becomes inactive.</li>
            <li>AD7–AD0 are then used for data transfer.</li>
        </ol>


        <h3>6. Common Latch</h3>

        <p>
            An octal latch such as the <strong>74LS373</strong> is
            commonly used for separating the lower-order address
            from the multiplexed lines.
        </p>


        <h3>7. Advantages</h3>

        <ul>
            <li>Reduces required processor pins.</li>
            <li>Provides separate address and data paths externally.</li>
            <li>Makes memory interfacing possible.</li>
        </ul>


        <h3>8. Conclusion</h3>

        <p>
            Demultiplexing is essential in an 8085 system because
            AD7–AD0 are shared between lower-order address and data.
            ALE and an external latch separate these two functions.
        </p>
    `
},


{
    id: 9,
    unit: "Unit 3",
    title: "Generation of Control Signals",
    priority: "Must Prepare",

    body: `
        <h3>1. Introduction</h3>

        <p>
            Control signals are required to coordinate communication
            between the 8085 and external memory or I/O devices.
        </p>


        <h3>2. Important 8085 Signals</h3>

        <ul>
            <li>ALE</li>
            <li>RD̅</li>
            <li>WR̅</li>
            <li>IO/M̅</li>
            <li>S0 and S1</li>
        </ul>


        <h3>3. IO/M̅ Signal</h3>

        <p>
            IO/M̅ distinguishes between memory and I/O operations.
            Its value is combined with status signals to determine
            the machine-cycle type.
        </p>


        <h3>4. RD̅ and WR̅</h3>

        <table>
            <tr>
                <th>Signal</th>
                <th>Meaning</th>
            </tr>

            <tr>
                <td>RD̅ = 0</td>
                <td>Read operation is active.</td>
            </tr>

            <tr>
                <td>WR̅ = 0</td>
                <td>Write operation is active.</td>
            </tr>
        </table>


        <h3>5. Status Signals</h3>

        <p>
            S0 and S1 provide status information. Along with IO/M̅,
            they identify the current machine cycle.
        </p>


        <h3>6. Basic Signal Generation</h3>

        <div class="diagram">
<pre>
                 8085
                   |
             IO/M, S1, S0
                   |
                   v
            +-------------+
            | Logic /     |
            | Decoding    |
            +------+------+
                   |
             +-----+-----+
             |           |
            RD          WR
             |           |
             v           v
          Memory       Memory
           Read         Write
</pre>
        </div>


        <h3>7. ALE Generation</h3>

        <p>
            ALE is generated during the beginning of a machine cycle.
            It allows external hardware to latch AD7–AD0 as the
            lower-order address.
        </p>


        <h3>8. Importance</h3>

        <ul>
            <li>Controls memory read/write operations.</li>
            <li>Controls I/O operations.</li>
            <li>Coordinates processor and peripheral devices.</li>
            <li>Provides proper timing for data transfer.</li>
        </ul>


        <h3>9. Conclusion</h3>

        <p>
            Control-signal generation is an important part of 8085
            operation. Status and control signals work together to
            identify and control each machine cycle.
        </p>
    `
},


{
    id: 10,
    unit: "Unit 3",
    title: "Instruction Cycle",
    priority: "Must Prepare",

    body: `
        <h3>1. Definition</h3>

        <p>
            An <strong>instruction cycle</strong> is the complete
            sequence of operations performed by the 8085 to fetch,
            decode and execute one instruction.
        </p>


        <h3>2. Main Steps</h3>

        <div class="diagram">
<pre>
       START
         |
         v
   Fetch Instruction
         |
         v
    Decode Instruction
         |
         v
    Execute Instruction
         |
         v
   Store / Update Result
         |
         v
      Next Instruction
</pre>
        </div>


        <h3>3. Fetch Operation</h3>

        <p>
            The address contained in the Program Counter is placed
            on the address bus. The instruction stored at that
            address is read from memory and loaded into the
            instruction register.
        </p>


        <h3>4. Decode Operation</h3>

        <p>
            The instruction decoder determines which operation must
            be performed and identifies the required operands.
        </p>


        <h3>5. Execute Operation</h3>

        <p>
            The processor performs the operation specified by the
            instruction. This may involve the ALU, registers, memory
            or I/O devices.
        </p>


        <h3>6. Program Counter</h3>

        <p>
            The Program Counter normally points to the next
            instruction. During instruction fetching, it is
            automatically updated so that execution can continue.
        </p>


        <h3>7. Instruction Cycle vs Machine Cycle</h3>

        <table>
            <tr>
                <th>Instruction Cycle</th>
                <th>Machine Cycle</th>
            </tr>

            <tr>
                <td>
                    Complete process of fetching and executing an instruction.
                </td>
                <td>
                    A smaller operation required as part of an instruction cycle.
                </td>
            </tr>

            <tr>
                <td>
                    May contain one or more machine cycles.
                </td>
                <td>
                    Consists of multiple T-states.
                </td>
            </tr>
        </table>


        <h3>8. Conclusion</h3>

        <p>
            The instruction cycle represents the complete execution
            process of an instruction. Understanding it is essential
            for understanding the timing and operation of the 8085.
        </p>
    `
},


{
    id: 11,
    unit: "Unit 3",
    title: "Machine Cycles",
    priority: "Must Prepare",

    body: `
        <h3>1. Definition</h3>

        <p>
            A <strong>machine cycle</strong> is a basic operation
            performed by the 8085 to complete a particular task such
            as opcode fetch, memory read, memory write, I/O read or
            I/O write.
        </p>


        <h3>2. Major Machine Cycles</h3>

        <table>
            <tr>
                <th>Machine Cycle</th>
                <th>Purpose</th>
            </tr>

            <tr>
                <td>Opcode Fetch</td>
                <td>Fetches the instruction opcode from memory.</td>
            </tr>

            <tr>
                <td>Memory Read</td>
                <td>Reads data from memory.</td>
            </tr>

            <tr>
                <td>Memory Write</td>
                <td>Writes data to memory.</td>
            </tr>

            <tr>
                <td>I/O Read</td>
                <td>Reads data from an I/O device.</td>
            </tr>

            <tr>
                <td>I/O Write</td>
                <td>Writes data to an I/O device.</td>
            </tr>
        </table>


        <h3>3. Opcode Fetch Cycle</h3>

        <p>
            Opcode fetch is used to obtain the opcode of the
            instruction from memory.
        </p>

        <p>
            In the 8085, an opcode-fetch machine cycle normally
            requires <strong>4 or 6 T-states</strong>, depending on
            the instruction.
        </p>


        <h3>4. Memory Read Cycle</h3>

        <p>
            During a memory-read cycle, the processor places the
            required memory address on the address bus and activates
            the read control signal. Memory places the requested
            data on the data bus.
        </p>


        <h3>5. Memory Write Cycle</h3>

        <p>
            During a memory-write cycle, the processor places the
            address and data on the respective buses and activates
            the write signal.
        </p>


        <h3>6. Relationship</h3>

        <div class="diagram">
<pre>
 Instruction Cycle
        |
        +---- Machine Cycle 1
        |
        +---- Machine Cycle 2
        |
        +---- Machine Cycle 3
        |
        +---- ...
</pre>
        </div>


        <h3>7. Importance</h3>

        <ul>
            <li>Explains processor timing.</li>
            <li>Helps understand memory interfacing.</li>
            <li>Helps analyze control signals.</li>
            <li>Forms the basis for instruction execution.</li>
        </ul>


        <h3>8. Conclusion</h3>

        <p>
            Machine cycles divide instruction execution into
            manageable hardware operations. Each machine cycle
            consists of several T-states.
        </p>
    `
},


{
    id: 12,
    unit: "Unit 3",
    title: "T-States",
    priority: "High Priority",

    body: `
        <h3>1. Definition</h3>

        <p>
            A <strong>T-state</strong> is one clock period of the
            8085 microprocessor.
        </p>

        <p>
            The letter <strong>T</strong> represents one timing
            state. Several T-states together form a machine cycle.
        </p>


        <h3>2. Relationship</h3>

        <div class="diagram">
<pre>
Instruction Cycle
       |
       v
Machine Cycle
       |
       +--- T1
       +--- T2
       +--- T3
       +--- T4
       +--- ...
</pre>
        </div>


        <h3>3. T1 State</h3>

        <p>
            During T1, the processor places the address on the bus.
            For the lower address/data lines AD7–AD0, ALE is used
            to indicate that the lines contain the lower-order address.
        </p>


        <h3>4. T2 State</h3>

        <p>
            During T2, the lower-order address has been latched and
            AD7–AD0 can be used for data transfer. Appropriate
            control signals begin the required operation.
        </p>


        <h3>5. T3 State</h3>

        <p>
            Data transfer or completion of the required bus operation
            occurs during this part of the cycle.
        </p>


        <h3>6. Example</h3>

        <p>
            A simple opcode-fetch cycle may contain T1, T2, T3 and
            T4 states. Additional T-states can occur when required
            by particular instructions.
        </p>


        <h3>7. Important Difference</h3>

        <table>
            <tr>
                <th>Term</th>
                <th>Meaning</th>
            </tr>

            <tr>
                <td>T-State</td>
                <td>One clock period.</td>
            </tr>

            <tr>
                <td>Machine Cycle</td>
                <td>Group of T-states performing one basic operation.</td>
            </tr>

            <tr>
                <td>Instruction Cycle</td>
                <td>Complete execution sequence of an instruction.</td>
            </tr>
        </table>


        <h3>8. Conclusion</h3>

        <p>
            T-states are the smallest timing units used in the
            8085. Machine cycles are constructed from T-states,
            and instruction cycles are constructed from machine cycles.
        </p>
    `
},


{
    id: 13,
    unit: "Unit 3",
    title: "Memory Interfacing",
    priority: "Must Prepare",

    body: `
        <h3>1. Introduction</h3>

        <p>
            <strong>Memory interfacing</strong> is the process of
            connecting memory devices such as RAM and ROM to the
            8085 so that the processor can correctly read and write
            data.
        </p>


        <h3>2. Requirements</h3>

        <p>
            A memory interface generally requires:
        </p>

        <ul>
            <li>Address lines</li>
            <li>Data lines</li>
            <li>Read control</li>
            <li>Write control</li>
            <li>Chip-select / address-decoding logic</li>
        </ul>


        <h3>3. Basic Memory Interface</h3>

        <div class="diagram">
<pre>
                  8085
                   |
        +----------+----------+
        |          |          |
        v          v          v
    Address       Data      Control
       |           |          |
       +-----------+----------+
                   |
             Address Decoder
                   |
            +------+------+
            |             |
            v             v
           ROM           RAM
</pre>
        </div>


        <h3>4. Address Lines</h3>

        <p>
            The processor sends the address of the required memory
            location through the address bus.
        </p>

        <p>
            The 8085 has 16 address lines and can therefore address
            64 KB of memory.
        </p>


        <h3>5. Data Lines</h3>

        <p>
            The 8-bit data bus transfers information between the
            processor and memory.
        </p>


        <h3>6. Address Decoding</h3>

        <p>
            Address decoding determines which memory device should
            respond to a particular address. It produces chip-select
            signals for individual memory devices.
        </p>


        <h3>7. Memory Read Operation</h3>

        <ol>
            <li>8085 places the memory address on the bus.</li>
            <li>The required memory device is selected.</li>
            <li>Read control is activated.</li>
            <li>Memory places data on the data bus.</li>
            <li>8085 receives the data.</li>
        </ol>


        <h3>8. Memory Write Operation</h3>

        <ol>
            <li>8085 places the memory address on the bus.</li>
            <li>The required memory device is selected.</li>
            <li>8085 places data on the data bus.</li>
            <li>Write control is activated.</li>
            <li>Memory stores the data.</li>
        </ol>


        <h3>9. Conclusion</h3>

        <p>
            Memory interfacing allows the 8085 to communicate with
            RAM and ROM. Correct address decoding and control-signal
            generation are essential for reliable memory operation.
        </p>
    `
},
/* ============================================================
   UNIT 4 — MID-TERM RESTRICTED SYLLABUS
   Only:
   1. Assembly Language Programming Basics
   2. Classification by Functionality
   3. Classification by Word Size
   ============================================================ */

{
    id: 14,
    unit: "Unit 4",
    title: "Assembly Language Programming Basics",
    priority: "Must Prepare",

    body: `
        <h3>1. Introduction</h3>

        <p>
            <strong>Assembly language</strong> is a low-level
            programming language in which machine instructions are
            represented using symbolic names called
            <strong>mnemonics</strong>.
        </p>

        <p>
            For the 8085, assembly language provides a convenient
            way for the programmer to write instructions such as
            MOV, MVI, ADD, SUB, JMP and HLT instead of writing
            binary machine codes directly.
        </p>


        <h3>2. Assembly Language Program</h3>

        <p>
            An assembly language program is a sequence of instructions
            written using mnemonics, operands, labels and assembler
            directives where required.
        </p>


        <h3>3. Basic Structure</h3>

        <div class="diagram">
<pre>
        LABEL:    MNEMONIC    OPERAND     ; COMMENT

        START:    MVI         A, 25H
                  MVI         B, 10H
                  ADD         B
                  HLT
</pre>
        </div>


        <h3>4. Important Terms</h3>

        <table>
            <tr>
                <th>Term</th>
                <th>Meaning</th>
            </tr>

            <tr>
                <td>Mnemonic</td>
                <td>
                    Symbolic name representing an instruction.
                </td>
            </tr>

            <tr>
                <td>Operand</td>
                <td>
                    Data, register or address on which the instruction operates.
                </td>
            </tr>

            <tr>
                <td>Label</td>
                <td>
                    Symbolic name used to identify an instruction or location.
                </td>
            </tr>

            <tr>
                <td>Comment</td>
                <td>
                    Explanation written for human understanding.
                </td>
            </tr>
        </table>


        <h3>5. Examples of 8085 Mnemonics</h3>

        <table>
            <tr>
                <th>Instruction</th>
                <th>Meaning</th>
            </tr>

            <tr>
                <td>MOV A, B</td>
                <td>Copy contents of B into A.</td>
            </tr>

            <tr>
                <td>MVI A, 25H</td>
                <td>Load immediate data 25H into A.</td>
            </tr>

            <tr>
                <td>ADD B</td>
                <td>Add B to accumulator.</td>
            </tr>

            <tr>
                <td>SUB C</td>
                <td>Subtract C from accumulator.</td>
            </tr>

            <tr>
                <td>JMP 2050H</td>
                <td>Jump to address 2050H.</td>
            </tr>

            <tr>
                <td>HLT</td>
                <td>Stop processor operation.</td>
            </tr>
        </table>


        <h3>6. General Steps in Assembly Programming</h3>

        <ol>
            <li>Understand the problem.</li>
            <li>Determine required input and output.</li>
            <li>Develop the algorithm or flowchart.</li>
            <li>Select suitable 8085 instructions.</li>
            <li>Write the assembly language program.</li>
            <li>Check the logic and instruction sequence.</li>
        </ol>


        <h3>7. Advantages</h3>

        <ul>
            <li>Easy to understand compared with binary machine code.</li>
            <li>Provides direct control over processor operations.</li>
            <li>Efficient for small and hardware-oriented programs.</li>
            <li>Useful for understanding microprocessor architecture.</li>
        </ul>


        <h3>8. Conclusion</h3>

        <p>
            Assembly language provides a symbolic representation of
            8085 machine instructions. It makes low-level programming
            easier while still giving the programmer direct control
            over processor operations.
        </p>
    `
},


{
    id: 15,
    unit: "Unit 4",
    title: "Classification of Instructions Based on Functionality",
    priority: "Must Prepare",

    body: `
        <h3>1. Introduction</h3>

        <p>
            8085 instructions can be classified according to the
            function they perform. This classification helps in
            understanding and writing assembly language programs.
        </p>


        <h3>2. Major Functional Categories</h3>

        <div class="diagram">
<pre>
              8085 INSTRUCTIONS
                     |
       +-------------+-------------+
       |             |             |
       v             v             v
 Data Transfer   Arithmetic     Logical
       |
       +-------------------------------+
       |               |               |
       v               v               v
    Branch         Machine Control   Stack/I/O
</pre>
        </div>


        <h3>3. Data Transfer Instructions</h3>

        <p>
            These instructions transfer data from one location to
            another without performing arithmetic on the data.
        </p>

        <table>
            <tr>
                <th>Instruction</th>
                <th>Purpose</th>
            </tr>

            <tr>
                <td>MOV</td>
                <td>Transfers data between registers or memory.</td>
            </tr>

            <tr>
                <td>MVI</td>
                <td>Loads immediate data.</td>
            </tr>

            <tr>
                <td>LDA</td>
                <td>Loads accumulator from a memory location.</td>
            </tr>

            <tr>
                <td>STA</td>
                <td>Stores accumulator into memory.</td>
            </tr>

            <tr>
                <td>LXI</td>
                <td>Loads 16-bit immediate data into a register pair.</td>
            </tr>
        </table>


        <h3>4. Arithmetic Instructions</h3>

        <p>
            Arithmetic instructions perform mathematical operations.
        </p>

        <ul>
            <li>ADD</li>
            <li>ADC</li>
            <li>SUB</li>
            <li>SBB</li>
            <li>INR</li>
            <li>DCR</li>
            <li>INX</li>
            <li>DCX</li>
            <li>DAD</li>
        </ul>


        <h3>5. Logical Instructions</h3>

        <p>
            Logical instructions perform logical, comparison and
            rotate operations.
        </p>

        <ul>
            <li>ANA</li>
            <li>ORA</li>
            <li>XRA</li>
            <li>CMP</li>
            <li>CMA</li>
            <li>RLC</li>
            <li>RRC</li>
            <li>RAL</li>
            <li>RAR</li>
        </ul>


        <h3>6. Branch Instructions</h3>

        <p>
            Branch instructions change the normal sequential flow
            of program execution.
        </p>

        <ul>
            <li>JMP</li>
            <li>Conditional jumps such as JZ, JNZ, JC and JNC</li>
            <li>CALL</li>
            <li>RET</li>
            <li>RST</li>
        </ul>


        <h3>7. Machine Control Instructions</h3>

        <ul>
            <li>NOP — No operation.</li>
            <li>HLT — Halt processor.</li>
            <li>DI — Disable interrupts.</li>
            <li>EI — Enable interrupts.</li>
            <li>SIM — Set interrupt mask / serial output control.</li>
            <li>RIM — Read interrupt mask / serial input information.</li>
        </ul>


        <h3>8. I/O Instructions</h3>

        <ul>
            <li>IN — Read data from an input port.</li>
            <li>OUT — Send data to an output port.</li>
        </ul>


        <h3>9. Summary Table</h3>

        <table>
            <tr>
                <th>Category</th>
                <th>Examples</th>
            </tr>

            <tr>
                <td>Data Transfer</td>
                <td>MOV, MVI, LDA, STA, LXI</td>
            </tr>

            <tr>
                <td>Arithmetic</td>
                <td>ADD, SUB, INR, DCR, DAD</td>
            </tr>

            <tr>
                <td>Logical</td>
                <td>ANA, ORA, XRA, CMP, CMA</td>
            </tr>

            <tr>
                <td>Branch</td>
                <td>JMP, JZ, JNZ, CALL, RET</td>
            </tr>

            <tr>
                <td>Machine Control</td>
                <td>NOP, HLT, DI, EI, SIM, RIM</td>
            </tr>

            <tr>
                <td>I/O</td>
                <td>IN, OUT</td>
            </tr>
        </table>


        <h3>10. Conclusion</h3>

        <p>
            Functional classification groups 8085 instructions
            according to their purpose. The most important groups
            are data transfer, arithmetic, logical, branching,
            machine-control and I/O instructions.
        </p>
    `
},


{
    id: 16,
    unit: "Unit 4",
    title: "Classification of Instructions Based on Word Size",
    priority: "Must Prepare",

    body: `
        <h3>1. Introduction</h3>

        <p>
            8085 instructions can also be classified according to
            their <strong>word size or instruction length</strong>.
            An instruction may occupy one, two or three bytes in memory.
        </p>


        <h3>2. Classification</h3>

        <table>
            <tr>
                <th>Instruction Type</th>
                <th>Size</th>
                <th>Example</th>
            </tr>

            <tr>
                <td>1-byte instruction</td>
                <td>1 byte</td>
                <td>MOV A, B</td>
            </tr>

            <tr>
                <td>2-byte instruction</td>
                <td>2 bytes</td>
                <td>MVI A, 32H</td>
            </tr>

            <tr>
                <td>3-byte instruction</td>
                <td>3 bytes</td>
                <td>LDA 2050H</td>
            </tr>
        </table>


        <h3>3. One-Byte Instructions</h3>

        <p>
            A one-byte instruction contains the complete opcode
            within a single byte. No additional data byte or address
            byte is required.
        </p>

        <p><strong>Examples:</strong></p>

        <ul>
            <li>MOV A, B</li>
            <li>ADD B</li>
            <li>SUB C</li>
            <li>INR A</li>
            <li>DCR B</li>
            <li>HLT</li>
        </ul>


        <h3>4. Two-Byte Instructions</h3>

        <p>
            A two-byte instruction contains one opcode byte followed
            by one data or port-address byte.
        </p>

        <p><strong>Example:</strong></p>

        <div class="diagram">
<pre>
MVI A, 32H

Byte 1 :  Opcode
Byte 2 :  32H
</pre>
        </div>

        <p>
            The first byte specifies the operation and the second
            byte contains the immediate data.
        </p>


        <h3>5. Three-Byte Instructions</h3>

        <p>
            A three-byte instruction contains an opcode followed by
            a 16-bit address or 16-bit immediate operand.
        </p>

        <p><strong>Example:</strong></p>

        <div class="diagram">
<pre>
LDA 2050H

Byte 1 : Opcode
Byte 2 : 50H
Byte 3 : 20H
</pre>
        </div>

        <p>
            The 16-bit address is stored in
            <strong>low-byte first and high-byte second</strong>
            order.
        </p>


        <h3>6. Comparison</h3>

        <table>
            <tr>
                <th>Feature</th>
                <th>1 Byte</th>
                <th>2 Bytes</th>
                <th>3 Bytes</th>
            </tr>

            <tr>
                <td>Length</td>
                <td>1 byte</td>
                <td>2 bytes</td>
                <td>3 bytes</td>
            </tr>

            <tr>
                <td>Additional operand</td>
                <td>Not required</td>
                <td>8-bit data/port address</td>
                <td>16-bit address/data</td>
            </tr>

            <tr>
                <td>Example</td>
                <td>ADD B</td>
                <td>MVI A, 32H</td>
                <td>LDA 2050H</td>
            </tr>
        </table>


        <h3>7. Importance</h3>

        <ul>
            <li>Helps determine memory occupied by a program.</li>
            <li>Helps calculate the address of the next instruction.</li>
            <li>Useful for understanding instruction fetching.</li>
            <li>Important for program tracing and debugging.</li>
        </ul>


        <h3>8. Conclusion</h3>

        <p>
            Based on word size, 8085 instructions are classified as
            one-byte, two-byte and three-byte instructions. Knowing
            the instruction length is important for understanding
            memory organization and program execution.
        </p>
    `
},


/* ============================================================
   UNIT 5 — PROGRAMMING
   ============================================================ */

{
    id: 17,
    unit: "Unit 5",
    title: "Decision-Making Programs in 8085",
    priority: "Must Prepare",

    body: `
        <h3>1. Introduction</h3>

        <p>
            Decision-making allows an 8085 program to choose different
            execution paths depending on a condition.
        </p>

        <p>
            Conditional branch instructions are mainly used to
            implement decision-making.
        </p>


        <h3>2. Basic Logic</h3>

        <div class="diagram">
<pre>
              START
                |
                v
          Read / Compare Data
                |
                v
           Is condition true?
             /          \\
           YES           NO
            |             |
            v             v
       Execute A      Execute B
             \\         /
              \\       /
                v
               END
</pre>
        </div>


        <h3>3. Comparison Using CMP</h3>

        <p>
            The <strong>CMP</strong> instruction compares the
            accumulator with the specified operand by internally
            performing subtraction.
        </p>

        <p>
            The accumulator itself is not changed, but condition
            flags are affected.
        </p>


        <h3>4. Important Conditional Jumps</h3>

        <table>
            <tr>
                <th>Instruction</th>
                <th>Condition</th>
            </tr>

            <tr>
                <td>JZ</td>
                <td>Jump if Zero flag = 1.</td>
            </tr>

            <tr>
                <td>JNZ</td>
                <td>Jump if Zero flag = 0.</td>
            </tr>

            <tr>
                <td>JC</td>
                <td>Jump if Carry flag = 1.</td>
            </tr>

            <tr>
                <td>JNC</td>
                <td>Jump if Carry flag = 0.</td>
            </tr>

            <tr>
                <td>JM</td>
                <td>Jump if Sign flag = 1.</td>
            </tr>

            <tr>
                <td>JP</td>
                <td>Jump if Sign flag = 0.</td>
            </tr>
        </table>


        <h3>5. Example: Find Larger of Two Numbers</h3>

        <p>
            Assume two numbers are stored at 2050H and 2051H.
            Store the larger number at 2052H.
        </p>

<pre class="code">
LDA 2050H
MOV B, A
LDA 2051H
CMP B
JNC STORE
MOV A, B

STORE:
STA 2052H
HLT
</pre>


        <h3>6. Working</h3>

        <ol>
            <li>First number is loaded into A.</li>
            <li>It is copied into register B.</li>
            <li>Second number is loaded into A.</li>
            <li>A is compared with B.</li>
            <li>The conditional jump selects the required result.</li>
            <li>The larger value is stored in memory.</li>
        </ol>


        <h3>7. Applications</h3>

        <ul>
            <li>Finding maximum or minimum.</li>
            <li>Checking zero/non-zero values.</li>
            <li>Checking carry or borrow conditions.</li>
            <li>Range checking.</li>
            <li>Implementing if-else logic.</li>
        </ul>


        <h3>8. Conclusion</h3>

        <p>
            Decision-making programs use comparison, flags and
            conditional branch instructions to change the normal
            sequence of program execution.
        </p>
    `
},


{
    id: 18,
    unit: "Unit 5",
    title: "Looping Programs in 8085",
    priority: "Must Prepare",

    body: `
        <h3>1. Introduction</h3>

        <p>
            A <strong>loop</strong> repeatedly executes a group of
            instructions until a specified condition is satisfied.
        </p>

        <p>
            Loops are useful when the same operation must be performed
            multiple times.
        </p>


        <h3>2. Basic Loop Structure</h3>

        <div class="diagram">
<pre>
          Initialize counter
                  |
                  v
             LOOP START
                  |
                  v
             Perform work
                  |
                  v
             Decrease count
                  |
                  v
            Count finished?
              /       \\
            NO         YES
             |          |
             +----<-----+
                        |
                       END
</pre>
        </div>


        <h3>3. DCR and Conditional Jump</h3>

        <p>
            A common 8085 loop uses <strong>DCR</strong> to decrement
            a counter and <strong>JNZ</strong> to repeat the loop
            while the result is not zero.
        </p>


        <h3>4. Example</h3>

        <p>
            Repeat an operation 05 times:
        </p>

<pre class="code">
MVI C, 05H

LOOP:
; operation
DCR C
JNZ LOOP

HLT
</pre>


        <h3>5. Working</h3>

        <ol>
            <li>Register C is initialized with 05H.</li>
            <li>The instructions inside the loop are executed.</li>
            <li>DCR C decreases the counter by one.</li>
            <li>If C is not zero, JNZ transfers control to LOOP.</li>
            <li>When C becomes zero, the loop terminates.</li>
        </ol>


        <h3>6. Applications</h3>

        <ul>
            <li>Adding multiple numbers.</li>
            <li>Searching arrays.</li>
            <li>Generating delays.</li>
            <li>Counting operations.</li>
            <li>Data processing.</li>
        </ul>


        <h3>7. Nested Loops</h3>

        <p>
            A loop placed inside another loop is called a
            <strong>nested loop</strong>. Nested loops are useful for
            multi-level repetition and time-delay generation.
        </p>


        <h3>8. Conclusion</h3>

        <p>
            Looping is implemented using counters and branch
            instructions. The DCR + JNZ combination is one of the
            most common techniques used in 8085 programs.
        </p>
    `
},


{
    id: 19,
    unit: "Unit 5",
    title: "Data Transfer Instructions",
    priority: "Must Prepare",

    body: `
        <h3>1. Introduction</h3>

        <p>
            Data transfer instructions are used to copy data between
            registers, memory and immediate operands.
        </p>

        <p>
            The source data remains unchanged unless another
            instruction modifies it.
        </p>


        <h3>2. Important Instructions</h3>

        <table>
            <tr>
                <th>Instruction</th>
                <th>Function</th>
            </tr>

            <tr>
                <td>MOV</td>
                <td>Copies data between registers or register-memory.</td>
            </tr>

            <tr>
                <td>MVI</td>
                <td>Loads 8-bit immediate data.</td>
            </tr>

            <tr>
                <td>LXI</td>
                <td>Loads 16-bit immediate data into a register pair.</td>
            </tr>

            <tr>
                <td>LDA</td>
                <td>Loads accumulator directly from memory.</td>
            </tr>

            <tr>
                <td>STA</td>
                <td>Stores accumulator directly into memory.</td>
            </tr>

            <tr>
                <td>LDAX</td>
                <td>Loads accumulator indirectly through BC or DE.</td>
            </tr>

            <tr>
                <td>STAX</td>
                <td>Stores accumulator indirectly through BC or DE.</td>
            </tr>
        </table>


        <h3>3. MOV</h3>

<pre class="code">
MOV A, B
</pre>

        <p>
            Copies the contents of register B into register A.
        </p>


        <h3>4. MVI</h3>

<pre class="code">
MVI A, 25H
</pre>

        <p>
            Loads the immediate value 25H into accumulator A.
        </p>


        <h3>5. LXI</h3>

<pre class="code">
LXI H, 2050H
</pre>

        <p>
            Loads the 16-bit value 2050H into register pair HL.
        </p>


        <h3>6. LDA and STA</h3>

<pre class="code">
LDA 2050H
STA 3050H
</pre>

        <p>
            LDA loads A from memory address 2050H, while STA stores
            A into memory address 3050H.
        </p>


        <h3>7. Importance</h3>

        <ul>
            <li>Moves data between processor locations.</li>
            <li>Loads initial values.</li>
            <li>Accesses memory data.</li>
            <li>Supports data-processing programs.</li>
        </ul>


        <h3>8. Conclusion</h3>

        <p>
            Data transfer instructions form the foundation of
            8085 programming because data must be moved into suitable
            registers before most processing operations.
        </p>
    `
},


{
    id: 20,
    unit: "Unit 5",
    title: "Arithmetic Instructions",
    priority: "Must Prepare",

    body: `
        <h3>1. Introduction</h3>

        <p>
            Arithmetic instructions perform addition, subtraction,
            increment, decrement and related arithmetic operations.
        </p>


        <h3>2. Main Arithmetic Instructions</h3>

        <table>
            <tr>
                <th>Instruction</th>
                <th>Operation</th>
            </tr>

            <tr>
                <td>ADD</td>
                <td>A ← A + operand</td>
            </tr>

            <tr>
                <td>ADC</td>
                <td>A ← A + operand + CY</td>
            </tr>

            <tr>
                <td>SUB</td>
                <td>A ← A − operand</td>
            </tr>

            <tr>
                <td>SBB</td>
                <td>A ← A − operand − CY</td>
            </tr>

            <tr>
                <td>INR</td>
                <td>Increment operand by 1.</td>
            </tr>

            <tr>
                <td>DCR</td>
                <td>Decrement operand by 1.</td>
            </tr>

            <tr>
                <td>INX</td>
                <td>Increment register pair.</td>
            </tr>

            <tr>
                <td>DCX</td>
                <td>Decrement register pair.</td>
            </tr>

            <tr>
                <td>DAD</td>
                <td>Add register pair to HL.</td>
            </tr>
        </table>


        <h3>3. Addition Example</h3>

<pre class="code">
MVI A, 25H
MVI B, 15H
ADD B
HLT
</pre>

        <p>
            After execution:
        </p>

        <p class="formula">
            A = 25H + 15H = 3AH
        </p>


        <h3>4. Subtraction Example</h3>

<pre class="code">
MVI A, 30H
MVI B, 10H
SUB B
HLT
</pre>

        <p>
            Result:
        </p>

        <p class="formula">
            A = 30H − 10H = 20H
        </p>


        <h3>5. Increment and Decrement</h3>

<pre class="code">
INR A
DCR B
</pre>

        <p>
            INR increases the operand by one and DCR decreases it by
            one.
        </p>


        <h3>6. DAD</h3>

<pre class="code">
DAD B
</pre>

        <p>
            The 16-bit contents of BC are added to HL. The result is
            stored in HL. The carry from the 16-bit addition affects
            the Carry flag.
        </p>


        <h3>7. Applications</h3>

        <ul>
            <li>Arithmetic calculations.</li>
            <li>Array and counter processing.</li>
            <li>Address calculations.</li>
            <li>Multi-byte arithmetic.</li>
        </ul>


        <h3>8. Conclusion</h3>

        <p>
            Arithmetic instructions allow the 8085 to perform
            numerical processing. They are extensively used in
            decision-making, looping and data-processing programs.
        </p>
    `
},


{
    id: 21,
    unit: "Unit 5",
    title: "Logical Instructions",
    priority: "High Priority",

    body: `
        <h3>1. Introduction</h3>

        <p>
            Logical instructions perform bitwise logical operations,
            comparisons, complement and rotate operations.
        </p>


        <h3>2. Main Logical Instructions</h3>

        <table>
            <tr>
                <th>Instruction</th>
                <th>Function</th>
            </tr>

            <tr>
                <td>ANA</td>
                <td>Logical AND.</td>
            </tr>

            <tr>
                <td>ORA</td>
                <td>Logical OR.</td>
            </tr>

            <tr>
                <td>XRA</td>
                <td>Logical XOR.</td>
            </tr>

            <tr>
                <td>CMP</td>
                <td>Compare accumulator with operand.</td>
            </tr>

            <tr>
                <td>CMA</td>
                <td>Complement accumulator.</td>
            </tr>

            <tr>
                <td>RLC</td>
                <td>Rotate accumulator left.</td>
            </tr>

            <tr>
                <td>RRC</td>
                <td>Rotate accumulator right.</td>
            </tr>

            <tr>
                <td>RAL</td>
                <td>Rotate accumulator left through carry.</td>
            </tr>

            <tr>
                <td>RAR</td>
                <td>Rotate accumulator right through carry.</td>
            </tr>
        </table>


        <h3>3. AND Operation</h3>

<pre class="code">
MVI A, F0H
MVI B, 0FH
ANA B
</pre>

        <p>
            Bitwise AND produces:
        </p>

        <p class="formula">
            F0H AND 0FH = 00H
        </p>


        <h3>4. OR Operation</h3>

<pre class="code">
MVI A, F0H
MVI B, 0FH
ORA B
</pre>

        <p>
            Bitwise OR produces:
        </p>

        <p class="formula">
            F0H OR 0FH = FFH
        </p>


        <h3>5. XOR Operation</h3>

        <p>
            XOR produces 1 when the corresponding bits are different.
            A common use is clearing the accumulator:
        </p>

<pre class="code">
XRA A
</pre>

        <p>
            This makes the accumulator zero.
        </p>


        <h3>6. Compare</h3>

        <p>
            CMP compares the accumulator with an operand by
            performing an internal subtraction. The accumulator
            remains unchanged while flags are affected.
        </p>


        <h3>7. Applications</h3>

        <ul>
            <li>Bit masking.</li>
            <li>Bit testing.</li>
            <li>Comparison.</li>
            <li>Data manipulation.</li>
            <li>Bit rotation.</li>
        </ul>


        <h3>8. Conclusion</h3>

        <p>
            Logical instructions provide bit-level processing and
            comparison capabilities. They are important for
            decision-making and data manipulation programs.
        </p>
    `
},


{
    id: 22,
    unit: "Unit 5",
    title: "Branch Instructions",
    priority: "Must Prepare",

    body: `
        <h3>1. Introduction</h3>

        <p>
            Branch instructions change the normal sequential flow of
            an 8085 program. They are essential for implementing
            decisions, loops and subroutine calls.
        </p>


        <h3>2. Types</h3>

        <ul>
            <li>Unconditional branch</li>
            <li>Conditional branch</li>
            <li>Call instructions</li>
            <li>Return instructions</li>
            <li>Restart instructions</li>
        </ul>


        <h3>3. Unconditional Jump</h3>

<pre class="code">
JMP 2050H
</pre>

        <p>
            JMP always transfers program control to the specified
            16-bit address.
        </p>


        <h3>4. Conditional Jumps</h3>

        <table>
            <tr>
                <th>Instruction</th>
                <th>Condition</th>
            </tr>

            <tr>
                <td>JZ</td>
                <td>Jump if Z = 1.</td>
            </tr>

            <tr>
                <td>JNZ</td>
                <td>Jump if Z = 0.</td>
            </tr>

            <tr>
                <td>JC</td>
                <td>Jump if CY = 1.</td>
            </tr>

            <tr>
                <td>JNC</td>
                <td>Jump if CY = 0.</td>
            </tr>

            <tr>
                <td>JM</td>
                <td>Jump if S = 1.</td>
            </tr>

            <tr>
                <td>JP</td>
                <td>Jump if S = 0.</td>
            </tr>

            <tr>
                <td>JPE</td>
                <td>Jump if parity is even.</td>
            </tr>

            <tr>
                <td>JPO</td>
                <td>Jump if parity is odd.</td>
            </tr>
        </table>


        <h3>5. CALL</h3>

<pre class="code">
CALL DELAY
</pre>

        <p>
            CALL transfers control to a subroutine and saves the
            return address on the stack.
        </p>


        <h3>6. RET</h3>

<pre class="code">
RET
</pre>

        <p>
            RET returns program execution from a subroutine to the
            saved return address.
        </p>


        <h3>7. RST</h3>

        <p>
            RST is a one-byte restart instruction that transfers
            control to a predefined restart address.
        </p>


        <h3>8. Applications</h3>

        <ul>
            <li>Loops</li>
            <li>Decision-making</li>
            <li>Subroutines</li>
            <li>Program control</li>
            <li>Interrupt-related restart operations</li>
        </ul>


        <h3>9. Conclusion</h3>

        <p>
            Branch instructions control the execution sequence of
            an 8085 program. Conditional jumps are particularly
            important for implementing decisions and loops.
        </p>
    `
},
/* ============================================================
   UNIT 6
   ============================================================ */

{
    id: 23,
    unit: "Unit 6",
    title: "Stack in 8085",
    priority: "Must Prepare",

    body: `
        <h3>1. Introduction</h3>

        <p>
            A <strong>stack</strong> is a temporary memory area used
            by the 8085 for storing data, return addresses and
            processor information during program execution.
        </p>

        <p>
            The stack follows the <strong>LIFO</strong> principle:
            <strong>Last In, First Out</strong>.
        </p>


        <h3>2. Stack Pointer</h3>

        <p>
            The 8085 contains a 16-bit <strong>Stack Pointer (SP)</strong>.
            It stores the address of the top of the stack.
        </p>

        <p>
            The stack is located in RAM and its location is determined
            by loading an appropriate address into SP.
        </p>


        <h3>3. Stack Operation</h3>

        <div class="diagram">
<pre>
             Higher Address
                  |
                  |
             +----------+
             |  Data    |
             +----------+
             |  Data    |
             +----------+
             |   TOP    |  <-- SP
             +----------+
                  |
             Lower Address

       Stack generally grows downward
</pre>
        </div>


        <h3>4. PUSH Operation</h3>

        <p>
            The <strong>PUSH</strong> instruction stores the contents
            of a register pair onto the stack.
        </p>

<pre class="code">
PUSH B
</pre>

        <p>
            The contents of the BC register pair are pushed onto the
            stack and the Stack Pointer is adjusted accordingly.
        </p>


        <h3>5. POP Operation</h3>

        <p>
            The <strong>POP</strong> instruction retrieves data from
            the stack and loads it into a register pair.
        </p>

<pre class="code">
POP B
</pre>


        <h3>6. Stack Initialization</h3>

<pre class="code">
LXI SP, 3000H
</pre>

        <p>
            This instruction initializes the Stack Pointer to address
            3000H.
        </p>


        <h3>7. Important Stack Instructions</h3>

        <table>
            <tr>
                <th>Instruction</th>
                <th>Function</th>
            </tr>

            <tr>
                <td>LXI SP</td>
                <td>Initializes the Stack Pointer.</td>
            </tr>

            <tr>
                <td>PUSH</td>
                <td>Stores register-pair data on the stack.</td>
            </tr>

            <tr>
                <td>POP</td>
                <td>Retrieves register-pair data from the stack.</td>
            </tr>

            <tr>
                <td>CALL</td>
                <td>Stores return address on the stack.</td>
            </tr>

            <tr>
                <td>RET</td>
                <td>Retrieves return address from the stack.</td>
            </tr>
        </table>


        <h3>8. Applications</h3>

        <ul>
            <li>Subroutine calls and returns.</li>
            <li>Temporary data storage.</li>
            <li>Saving register contents.</li>
            <li>Interrupt processing.</li>
            <li>Nested subroutine execution.</li>
        </ul>


        <h3>9. Conclusion</h3>

        <p>
            The stack is an important memory structure in the 8085.
            It provides temporary storage and is especially important
            for subroutines, return addresses and saving processor data.
        </p>
    `
},


{
    id: 24,
    unit: "Unit 6",
    title: "Subroutines in 8085",
    priority: "Must Prepare",

    body: `
        <h3>1. Introduction</h3>

        <p>
            A <strong>subroutine</strong> is a separate block of
            instructions written to perform a specific task.
            The main program can call the subroutine whenever that
            task is required.
        </p>


        <h3>2. Need for Subroutines</h3>

        <ul>
            <li>Reduces repetition of instructions.</li>
            <li>Makes programs modular.</li>
            <li>Improves program organization.</li>
            <li>Makes debugging easier.</li>
            <li>Allows frequently used operations to be reused.</li>
        </ul>


        <h3>3. CALL Instruction</h3>

<pre class="code">
CALL DELAY
</pre>

        <p>
            CALL transfers control from the main program to the
            subroutine. The return address is automatically stored
            on the stack.
        </p>


        <h3>4. RET Instruction</h3>

<pre class="code">
RET
</pre>

        <p>
            RET retrieves the saved return address from the stack
            and returns control to the instruction following CALL.
        </p>


        <h3>5. Basic Structure</h3>

        <div class="diagram">
<pre>
        Main Program
             |
             v
        CALL SUB1
             |
             v
       +-------------+
       |  SUB1       |
       |             |
       | Instructions|
       |             |
       |    RET      |
       +------+------+
              |
              v
        Main Program
</pre>
        </div>


        <h3>6. Example</h3>

<pre class="code">
MVI A, 05H

CALL ADDONE

HLT

ADDONE:
INR A
RET
</pre>


        <h3>7. Working</h3>

        <ol>
            <li>The main program loads data into A.</li>
            <li>CALL transfers control to ADDONE.</li>
            <li>The return address is saved on the stack.</li>
            <li>INR A performs the required operation.</li>
            <li>RET obtains the return address.</li>
            <li>Execution continues after CALL.</li>
        </ol>


        <h3>8. Nested Subroutines</h3>

        <p>
            A subroutine can call another subroutine. This is called
            a <strong>nested subroutine</strong>. The stack is used
            to preserve multiple return addresses.
        </p>


        <h3>9. Important Points</h3>

        <ul>
            <li>CALL uses the stack.</li>
            <li>RET uses the stack.</li>
            <li>Stack Pointer must be properly initialized.</li>
            <li>Subroutines should normally end with RET.</li>
        </ul>


        <h3>10. Conclusion</h3>

        <p>
            Subroutines provide modularity and code reuse in 8085
            programs. CALL and RET, together with the stack, form
            the basic mechanism for subroutine execution.
        </p>
    `
},


{
    id: 25,
    unit: "Unit 6",
    title: "Counters in 8085",
    priority: "High Priority",

    body: `
        <h3>1. Introduction</h3>

        <p>
            A <strong>counter</strong> is a program mechanism used
            to keep track of the number of times an operation or
            event occurs.
        </p>

        <p>
            In 8085 programming, registers are commonly used as
            counters.
        </p>


        <h3>2. Basic Counter Technique</h3>

        <div class="diagram">
<pre>
       Load initial count
              |
              v
        Perform operation
              |
              v
          Decrement
          counter
              |
              v
        Is count zero?
          /       \\
        NO         YES
        |           |
        +-- Repeat  END
</pre>
        </div>


        <h3>3. Example</h3>

        <p>
            Execute an operation 10 times:
        </p>

<pre class="code">
MVI C, 0AH

LOOP:
; Required operation
DCR C
JNZ LOOP

HLT
</pre>


        <h3>4. Working</h3>

        <ol>
            <li>Register C is loaded with 0AH.</li>
            <li>The required operation is performed.</li>
            <li>DCR C reduces the count by one.</li>
            <li>JNZ checks whether C is zero.</li>
            <li>If C is not zero, the loop repeats.</li>
            <li>When C becomes zero, execution continues after the loop.</li>
        </ol>


        <h3>5. Up Counter</h3>

        <p>
            An up counter increases its value. The 8085
            <strong>INR</strong> instruction can be used for
            incrementing an 8-bit counter.
        </p>


        <h3>6. Down Counter</h3>

        <p>
            A down counter decreases its value. The
            <strong>DCR</strong> instruction is commonly used.
        </p>


        <h3>7. Applications</h3>

        <ul>
            <li>Counting events.</li>
            <li>Loop control.</li>
            <li>Generating delays.</li>
            <li>Processing a fixed number of data items.</li>
            <li>Counting repetitions in control applications.</li>
        </ul>


        <h3>8. Conclusion</h3>

        <p>
            Counters provide a simple method for controlling repeated
            operations in 8085 programs. They are commonly combined
            with increment/decrement and conditional branch instructions.
        </p>
    `
},


{
    id: 26,
    unit: "Unit 6",
    title: "Time Delay Routines",
    priority: "Must Prepare",

    body: `
        <h3>1. Introduction</h3>

        <p>
            A <strong>time delay routine</strong> is a program sequence
            used to create a controlled delay between two operations.
        </p>

        <p>
            Delay routines are commonly implemented using loops
            because every 8085 instruction requires a known number
            of T-states.
        </p>


        <h3>2. Basic Concept</h3>

        <div class="diagram">
<pre>
          Load counter
               |
               v
          Execute delay
             loop
               |
               v
         Decrement count
               |
               v
           Count = 0?
            /      \\
          NO        YES
          |          |
          +----------+
                     |
                   Return
</pre>
        </div>


        <h3>3. Simple Delay Program</h3>

<pre class="code">
MVI C, FFH

DELAY:
DCR C
JNZ DELAY

RET
</pre>


        <h3>4. Working</h3>

        <ol>
            <li>The counter register is loaded with an initial value.</li>
            <li>DCR decreases the counter.</li>
            <li>JNZ checks the Zero flag.</li>
            <li>If the counter is not zero, execution returns to DELAY.</li>
            <li>When the counter reaches zero, the delay routine ends.</li>
        </ol>


        <h3>5. Nested Delay</h3>

        <p>
            A longer delay can be generated by using nested loops.
            One counter forms the inner loop while another counter
            controls the number of repetitions of the outer loop.
        </p>

<pre class="code">
MVI B, 05H

OUTER:
MVI C, FFH

INNER:
DCR C
JNZ INNER

DCR B
JNZ OUTER

RET
</pre>


        <h3>6. Factors Affecting Delay</h3>

        <ul>
            <li>Clock frequency of the processor.</li>
            <li>Number of T-states required by instructions.</li>
            <li>Number of loop iterations.</li>
            <li>Number of nested loops.</li>
        </ul>


        <h3>7. Applications</h3>

        <ul>
            <li>LED blinking.</li>
            <li>Generating timing intervals.</li>
            <li>Waiting for peripheral devices.</li>
            <li>Controlling simple hardware timing.</li>
        </ul>


        <h3>8. Conclusion</h3>

        <p>
            Time-delay routines use instruction execution time and
            repeated loops to create controlled delays. Accurate
            delay calculation requires knowledge of instruction
            T-states and processor clock frequency.
        </p>
    `
},


{
    id: 27,
    unit: "Unit 6",
    title: "Code Conversion",
    priority: "Must Prepare",

    body: `
        <h3>1. Introduction</h3>

        <p>
            <strong>Code conversion</strong> means converting data
            from one digital representation into another representation.
        </p>

        <p>
            In microprocessor systems, common conversions include
            Binary to BCD, BCD to Binary and ASCII-related conversions.
        </p>


        <h3>2. Need for Code Conversion</h3>

        <ul>
            <li>Different devices may use different data formats.</li>
            <li>Display devices may require a particular code.</li>
            <li>Human-readable data may require ASCII representation.</li>
            <li>Arithmetic processing may use binary representation.</li>
        </ul>


        <h3>3. Binary to BCD Concept</h3>

        <p>
            Binary numbers can be converted into decimal digits
            represented using BCD. Each decimal digit is represented
            using four bits.
        </p>

        <table>
            <tr>
                <th>Decimal Digit</th>
                <th>BCD</th>
            </tr>

            <tr>
                <td>0</td>
                <td>0000</td>
            </tr>

            <tr>
                <td>1</td>
                <td>0001</td>
            </tr>

            <tr>
                <td>5</td>
                <td>0101</td>
            </tr>

            <tr>
                <td>9</td>
                <td>1001</td>
            </tr>
        </table>


        <h3>4. BCD to Binary Concept</h3>

        <p>
            To convert decimal digits represented in BCD into a
            binary value, the decimal value of each digit is
            processed according to its positional weight.
        </p>


        <h3>5. ASCII Conversion</h3>

        <p>
            ASCII represents characters using numerical codes.
            For example, decimal digits have ASCII codes in the
            range 30H to 39H.
        </p>

        <p>
            Therefore, conversion between a numeric digit and its
            ASCII representation may require adding or subtracting
            30H.
        </p>


        <h3>6. General Conversion Method</h3>

        <ol>
            <li>Identify source code format.</li>
            <li>Identify destination format.</li>
            <li>Separate required digits or bits.</li>
            <li>Apply the required conversion algorithm.</li>
            <li>Store the converted result.</li>
        </ol>


        <h3>7. Applications</h3>

        <ul>
            <li>Digital displays.</li>
            <li>Keyboard interfaces.</li>
            <li>Communication systems.</li>
            <li>Data storage and processing.</li>
            <li>Human-machine interfaces.</li>
        </ul>


        <h3>8. Conclusion</h3>

        <p>
            Code conversion allows different digital representations
            to communicate with each other. It is particularly useful
            when numerical data must be exchanged between processors,
            displays and communication devices.
        </p>
    `
},


{
    id: 28,
    unit: "Unit 6",
    title: "BCD Arithmetic",
    priority: "Must Prepare",

    body: `
        <h3>1. Introduction</h3>

        <p>
            <strong>BCD (Binary Coded Decimal)</strong> represents
            each decimal digit separately using four binary bits.
        </p>

        <p>
            Valid BCD digit values range from 0000 to 1001,
            representing decimal 0 to 9.
        </p>


        <h3>2. BCD Representation</h3>

        <table>
            <tr>
                <th>Decimal</th>
                <th>BCD</th>
            </tr>

            <tr>
                <td>0</td>
                <td>0000</td>
            </tr>

            <tr>
                <td>3</td>
                <td>0011</td>
            </tr>

            <tr>
                <td>5</td>
                <td>0101</td>
            </tr>

            <tr>
                <td>9</td>
                <td>1001</td>
            </tr>
        </table>


        <h3>3. BCD Addition</h3>

        <p>
            BCD addition is first performed as ordinary binary
            addition. After addition, the result must be corrected
            if a BCD digit becomes invalid.
        </p>


        <h3>4. Need for Correction</h3>

        <p>
            If the four-bit result is greater than 9, or if there is
            a carry from the lower BCD digit, the correction value
            <strong>06H</strong> is added.
        </p>


        <h3>5. Example</h3>

        <p>
            Consider:
        </p>

        <p class="formula">
            25 + 38 = 63
        </p>

        <p>
            BCD representations:
        </p>

        <p class="formula">
            25 = 0010 0101<br>
            38 = 0011 1000
        </p>

        <p>
            Binary addition gives an intermediate result. If any
            BCD digit exceeds 9 or generates a carry, 06H correction
            is required.
        </p>


        <h3>6. DAA Instruction</h3>

<pre class="code">
DAA
</pre>

        <p>
            <strong>DAA (Decimal Adjust Accumulator)</strong> adjusts
            the accumulator after a BCD addition so that the result
            becomes a valid packed BCD number.
        </p>


        <h3>7. General BCD Addition Program</h3>

<pre class="code">
MVI A, 25H
MVI B, 38H
ADD B
DAA
HLT
</pre>


        <h3>8. Working</h3>

        <ol>
            <li>First BCD number is loaded into A.</li>
            <li>Second BCD number is loaded into B.</li>
            <li>ADD performs binary addition.</li>
            <li>DAA adjusts the accumulator for valid BCD.</li>
            <li>The final BCD result remains in A.</li>
        </ol>


        <h3>9. Applications</h3>

        <ul>
            <li>Digital clocks.</li>
            <li>Calculators.</li>
            <li>Digital meters.</li>
            <li>Decimal counters.</li>
            <li>Financial and numeric systems.</li>
        </ul>


        <h3>10. Conclusion</h3>

        <p>
            BCD arithmetic allows the 8085 to process decimal digits
            directly. The DAA instruction is especially important
            for correcting the accumulator after BCD addition.
        </p>
    `
},


{
    id: 29,
    unit: "Unit 6",
    title: "16-Bit Data Operations",
    priority: "Must Prepare",

    body: `
        <h3>1. Introduction</h3>

        <p>
            Although the 8085 is an 8-bit microprocessor, it can
            perform <strong>16-bit operations</strong> using its
            register pairs.
        </p>

        <p>
            The main register pairs are:
        </p>

        <ul>
            <li>BC</li>
            <li>DE</li>
            <li>HL</li>
        </ul>


        <h3>2. Register Pair Concept</h3>

        <p>
            Two 8-bit registers are combined to form a 16-bit
            register pair.
        </p>

        <div class="diagram">
<pre>
       B register       C register
       +--------+       +--------+
       | 8 bits |       | 8 bits |
       +--------+       +--------+
              \           /
               \         /
                +-------+
                |  BC   |
                |16-bit |
                +-------+
</pre>
        </div>


        <h3>3. LXI Instruction</h3>

<pre class="code">
LXI H, 2050H
</pre>

        <p>
            LXI loads a 16-bit immediate value into a register pair.
        </p>


        <h3>4. INX and DCX</h3>

<pre class="code">
INX H
DCX H
</pre>

        <p>
            INX increments a register pair by one, while DCX
            decrements a register pair by one.
        </p>


        <h3>5. DAD Instruction</h3>

<pre class="code">
DAD B
</pre>

        <p>
            DAD adds the contents of the specified register pair
            to HL.
        </p>

        <p class="formula">
            HL ← HL + BC
        </p>

        <p>
            The carry generated by this 16-bit addition is stored
            in the Carry flag.
        </p>


        <h3>6. Example of 16-Bit Addition</h3>

<pre class="code">
LXI H, 1234H
LXI B, 1111H
DAD B
HLT
</pre>

        <p>
            The operation performed is:
        </p>

        <p class="formula">
            1234H + 1111H = 2345H
        </p>

        <p>
            Therefore, HL contains 2345H after the addition.
        </p>


        <h3>7. 16-Bit Data Transfer</h3>

        <p>
            LXI is commonly used for loading 16-bit values.
            PUSH and POP can also transfer 16-bit register-pair
            contents through the stack.
        </p>


        <h3>8. Important Instructions</h3>

        <table>
            <tr>
                <th>Instruction</th>
                <th>Function</th>
            </tr>

            <tr>
                <td>LXI</td>
                <td>Load 16-bit immediate data.</td>
            </tr>

            <tr>
                <td>INX</td>
                <td>Increment register pair.</td>
            </tr>

            <tr>
                <td>DCX</td>
                <td>Decrement register pair.</td>
            </tr>

            <tr>
                <td>DAD</td>
                <td>Add register pair to HL.</td>
            </tr>

            <tr>
                <td>PUSH</td>
                <td>Store register-pair data on stack.</td>
            </tr>

            <tr>
                <td>POP</td>
                <td>Retrieve register-pair data from stack.</td>
            </tr>
        </table>


        <h3>9. Applications</h3>

        <ul>
            <li>Memory address calculations.</li>
            <li>16-bit arithmetic.</li>
            <li>Pointer manipulation.</li>
            <li>Stack operations.</li>
            <li>Processing 16-bit data.</li>
        </ul>


        <h3>10. Conclusion</h3>

        <p>
            The 8085 performs 16-bit operations using register pairs.
            Instructions such as LXI, INX, DCX and DAD are especially
            important for 16-bit data processing and address calculations.
        </p>
    `
}


];

