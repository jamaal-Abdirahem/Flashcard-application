"use strict";

const terms_ch6 = [
  { term: "Object", definition: "A person, place, event, or transaction." },
  {
    term: "Attribute",
    definition: "A characteristic that describes an object (an adjective).",
  },
  { term: "Method", definition: "A task that an object can perform (a verb)." },
  {
    term: "Class",
    definition: "A blueprint or template for creating similar objects.",
  },
  { term: "Instance", definition: "A specific object created from a class." },
  {
    term: "Encapsulation",
    definition:
      "Bundling data and methods together and hiding the internal details. Think 'black box.'",
  },
  {
    term: "Inheritance",
    definition:
      "A subclass (child) adopts the attributes and methods of a superclass (parent). Promotes code reusability.",
  },
  {
    term: "Polymorphism",
    definition:
      "The ability for the same message to be interpreted differently by different objects. 'Same message, different behavior.'",
  },
  {
    term: "UML",
    definition:
      "Unified Modeling Language: The standard visual language used to create object models.",
  },
  {
    term: "Use Case Diagram",
    definition:
      "Shows how a user (actor) interacts with the system to achieve a goal. Models system function.",
  },
  {
    term: "Class Diagram",
    definition:
      "A static diagram showing the system's classes, attributes, methods, and relationships. Models system structure.",
  },
  {
    term: "Sequence Diagram",
    definition:
      "A dynamic diagram showing the sequence of messages between objects over time. Models system interaction.",
  },
  {
    term: "State Transition Diagram",
    definition:
      "Shows the different states of a single object and the events that cause it to change state. Models an object's lifecycle.",
  },
  {
    term: "Activity Diagram",
    definition:
      "A flowchart that shows the flow of activities in a process or workflow.",
  },
];

const terms_ch8 = [
  {
    term: "User Interface (UI)",
    definition:
      "Consists of all the hardware, software, screens, menus, and features that affect two-way communications between the user and the computer.",
  },
  {
    term: "Human-Computer Interaction (HCI)",
    definition:
      "The study of the relationship between computers and the people who use them to perform their jobs.",
  },
  {
    term: "User-Centered Design",
    definition:
      "A design philosophy where the primary focus is on the users, their needs, and their goals.",
  },
  {
    term: "Detail Report",
    definition:
      "A report that produces one or more lines of output for each record processed.",
  },
  {
    term: "Exception Report",
    definition:
      "A report that displays only those records that meet a specific condition.",
  },
  {
    term: "Summary Report",
    definition:
      "A report that shows total figures, often for upper-level managers who do not need the supporting details.",
  },
  {
    term: "Garbage In, Garbage Out (GIGO)",
    definition:
      "The principle that the quality of the output from a system is only as good as the quality of the input.",
  },
  {
    term: "Input Mask",
    definition:
      "A template or pattern that restricts how data is entered into a field to prevent errors.",
  },
  {
    term: "Data Validation Rule",
    definition:
      "A check applied to data during entry to ensure that it is correct, reasonable, and valid.",
  },
];

const terms_ch9 = [
  {
    term: "DBMS",
    definition:
      "Database Management System: A collection of tools, features, and interfaces that enables users to add, update, manage, access, and analyze the contents of a database.",
  },
  {
    term: "Data Redundancy",
    definition:
      "A problem in file-oriented systems where the same data is stored in multiple places, wasting space and causing integrity issues.",
  },
  {
    term: "Entity",
    definition:
      "A person, place, thing, or event for which data is collected and maintained.",
  },
  {
    term: "Record (Tuple)",
    definition:
      "A set of related fields that describes one instance of an entity.",
  },
  {
    term: "Field",
    definition: "A single characteristic or fact about an entity.",
  },
  {
    term: "Primary Key",
    definition:
      "A field or combination of fields that uniquely and minimally identifies a particular member of an entity.",
  },
  {
    term: "Foreign Key",
    definition:
      "A field in one table that must match a primary key value in another table to establish a relationship.",
  },
  {
    term: "Referential Integrity",
    definition:
      "A rule that ensures relationships between tables remain consistent by preventing 'orphan' records where a foreign key value does not match a primary key in a related table.",
  },
  {
    term: "ERD",
    definition:
      "Entity-Relationship Diagram: A graphic representation of all system entities and the relationships among them.",
  },
  {
    term: "Normalization",
    definition:
      "The process of creating efficient table designs by assigning specific fields to each table in the database to reduce redundancy and improve data integrity.",
  },
  {
    term: "1NF (First Normal Form)",
    definition:
      "A table is in 1NF if it does not contain any repeating groups.",
  },
  {
    term: "2NF (Second Normal Form)",
    definition:
      "A table is in 2NF if it is in 1NF and all non-key fields are functionally dependent on the entire primary key.",
  },
  {
    term: "3NF (Third Normal Form)",
    definition:
      "A table is in 3NF if it is in 2NF and no non-key field is dependent on another non-key field.",
  },
  {
    term: "Data Warehouse",
    definition:
      "An integrated collection of data that can include seemingly unrelated information from all over a company, used to support business decisions.",
  },
  {
    term: "Data Mining",
    definition:
      "The process of looking for meaningful data patterns and relationships in large amounts of data.",
  },
  {
    term: "Logical Storage",
    definition:
      "Data that a user can view, understand, and access, regardless of how or where that information actually is organized or stored.",
  },
  {
    term: "Physical Storage",
    definition:
      "The hardware-related process of reading and writing binary data to physical media such as a hard drive or CD-ROM.",
  },
];

const terms_ch10 = [
  {
    term: "System Architecture",
    definition:
      "Translates the logical design of an information system into a physical structure that includes hardware, software, network support, and processing methods.",
  },
  {
    term: "Scalability",
    definition:
      "A system’s ability to expand, change, or downsize easily to meet the changing needs of a business.",
  },
  {
    term: "Client/Server Architecture",
    definition:
      "A design that divides processing between clients (which handle the user interface) and servers (which store and manage data).",
  },
  {
    term: "Fat Client",
    definition:
      "A client/server design that locates all or most of the application processing logic at the client.",
  },
  {
    term: "Thin Client",
    definition:
      "A client/server design that locates all or most of the processing logic at the server.",
  },
  {
    term: "Three-Tier Design",
    definition:
      "An architecture that separates the user interface, business logic, and data storage into three distinct layers or tiers.",
  },
  {
    term: "Middleware",
    definition:
      "Software that connects different tiers or applications, enabling them to communicate.",
  },
  {
    term: "Cloud Computing",
    definition:
      "A model for delivering IT services where resources are retrieved from the Internet ('the cloud') on demand.",
  },
  {
    term: "Online Processing",
    definition:
      "An interactive method where data is processed immediately as each transaction occurs.",
  },
  {
    term: "Batch Processing",
    definition:
      "A method where data is collected and processed together in a group ('batch') at a scheduled time.",
  },
  {
    term: "Network Topology",
    definition:
      "The way a network is configured, or the physical layout of its devices.",
  },
  {
    term: "Star Network",
    definition:
      "A network topology where all devices are connected to a central device, like a switch. It is the most popular modern LAN topology.",
  },
  {
    term: "System Design Specification",
    definition:
      "The document that presents the complete design for an information system; it is the final deliverable of the systems design phase.",
  },
];

const questions_ch6 = [
  {
    term: "Define Object-Oriented Analysis and its end product.",
    definition:
      "Object-Oriented Analysis (OOA) is the process of identifying and defining objects and their relationships in a problem domain. Its end product is an object model, often represented by UML diagrams like Class Diagrams, that describes the system's structure and behavior.",
  },
  {
    term: "What is the difference between a Class and an Instance? Provide an example.",
    definition:
      "A Class is a blueprint (e.g., the blueprint for a 'Car'). An Instance is a specific object created from that blueprint (e.g., 'my specific blue Toyota Camry'). The class defines the attributes (color, make) and methods (startEngine), while the instance has specific values for those attributes.",
  },
  {
    term: "Define and provide an example for Encapsulation, Inheritance, and Polymorphism. Why is each important?",
    definition:
      "<ul><li><strong>Encapsulation:</strong> Bundling data and methods into a single unit (a class). Ex: A 'Car' class encapsulates 'fuelLevel' and the 'drive()' method. Importance: Information hiding.</li><li><strong>Inheritance:</strong> A subclass derives from a superclass. Ex: 'ElectricCar' inherits from 'Car'. Importance: Code reuse.</li><li><strong>Polymorphism:</strong> Different objects respond to the same message differently. Ex: A 'Car' object and a 'Bicycle' object both have a 'move()' method, but they implement it differently. Importance: Flexibility.</li></ul>",
  },
  {
    term: "What is the main purpose of a Use Case Diagram? What are its key components?",
    definition:
      "Its purpose is to model system functionality from the user's perspective. Key components are: <ul><li><strong>Actors:</strong> Users or external systems.</li><li><strong>Use Cases:</strong> Goals or tasks the actor wants to achieve.</li><li><strong>System Boundary:</strong> A box separating the system from the outside.</li><li><strong>Relationships:</strong> Lines connecting actors to use cases.</li></ul>",
  },
  {
    term: "Compare a Sequence Diagram with an Activity Diagram. When would you use each?",
    definition:
      "<ul><li><strong>Comparison:</strong> Both are dynamic diagrams showing behavior.</li><li><strong>Contrast:</strong> Sequence Diagrams show time-ordered message sequences between specific objects. Activity Diagrams show the flow of control from one activity to another, like a flowchart.</li><li><strong>When to use:</strong> Use a Sequence Diagram for the logic of a specific interaction (e.g., 'user login'). Use an Activity Diagram to model a business process (e.g., 'order fulfillment').</li></ul>",
  },
  {
    term: "How does a Class Diagram differ from a State Transition Diagram?",
    definition:
      "A Class Diagram is a static, big-picture view of the system's structure (all classes and relationships). A State Transition Diagram is a dynamic view of a single object's lifecycle (its states and the events that change them).",
  },
  {
    term: "For a car rental system, list three objects. For one, list attributes and methods.",
    definition:
      "Objects: Car, Customer, RentalAgreement. <br><br><strong>Object: Car</strong><ul><li><strong>Attributes:</strong> make, model, licensePlate, dailyRate, isAvailable</li><li><strong>Methods:</strong> rentOut(), returnCar(), checkForService()</li></ul>",
  },
  {
    term: "Draw a simple Use Case diagram for a library member.",
    definition:
      "This is a visual diagram. The key elements are: <br><strong>Actor:</strong> Library Member <br><strong>Use Cases:</strong> <ul><li>Borrow Book</li><li>Return Book</li><li>Search Catalog</li></ul> The actor has lines connecting to each use case within a system boundary.",
  },
  {
    term: "Explain the relationship and cardinality between a PROFESSOR and a COURSE class.",
    definition:
      "<ul><li><strong>Relationship:</strong> 'Teaches'. A Professor teaches a Course.</li><li><strong>Cardinality (Common):</strong> A <strong>PROFESSOR</strong> can teach <strong>zero or more (0..*)</strong> courses. A <strong>COURSE</strong> is taught by <strong>one and only one (1..1)</strong> professor.</li></ul>",
  },
];

const questions_ch8 = [
  {
    term: "Explain the difference between process-centered and user-centered design.",
    definition:
      "<strong>Process-centered design</strong> focuses on improving business processes and tasks. The main goal is efficiency and transaction processing. <strong>User-centered design (UCD)</strong> focuses on the needs, goals, and limitations of the user. The main goal is usability and user satisfaction. UCD involves users throughout the design process.",
  },
  {
    term: "What is 'Garbage In, Garbage Out' (GIGO) and why is it critical?",
    definition:
      "<strong>GIGO</strong> is the principle that the quality of information coming out of a system cannot be better than the quality of the data put into it. It's critical for input design because incorrect input data will lead to flawed processing, incorrect reports, bad decisions, and a loss of user trust in the system.",
  },
  {
    term: "List and describe four of the eight guidelines for effective UI design.",
    definition:
      "<ul><li><strong>Focus on basic objectives:</strong> The UI should be easy to use and learn.</li><li><strong>Create an effective visual layout:</strong> Group related items, use whitespace, and align controls for a clean, organized look.</li><li><strong>Provide clear navigation:</strong> Users should always know where they are and how to get to where they want to go.</li><li><strong>Be consistent:</strong> Use similar design patterns, terminology, and layouts throughout the application.</li></ul> (Other possible answers include: Minimize user effort, provide feedback, be flexible, use familiar terms.)",
  },
  {
    term: "Compare a Detail, Exception, and Summary Report. Provide a scenario for each.",
    definition:
      "<ul><li><strong>Detail Report:</strong> Lists every record. Scenario: A list of all sales transactions for a specific day for an accountant to review.</li><li><strong>Exception Report:</strong> Lists only records that meet a specific, often unusual, condition. Scenario: A list of all customer accounts that are more than 60 days overdue for a collections manager.</li><li><strong>Summary Report:</strong> Shows totals and trends, not individual records. Scenario: A monthly sales total report by region for a Vice President of Sales.</li></ul>",
  },
  {
    term: "Explain the difference between option buttons (radio buttons) and check boxes.",
    definition:
      "<strong>Option/Radio Buttons</strong> are used for a set of mutually exclusive choices; the user can only select ONE option from the group (e.g., selecting 'Male' or 'Female'). <strong>Check Boxes</strong> are used when one or more choices can be selected from a list (e.g., selecting multiple pizza toppings).",
  },
  {
    term: "List and describe three data validation rules for a new customer order screen.",
    definition:
      "<ul><li><strong>Range Check:</strong> Ensures a number is within a specific range. Ex: The 'Quantity' field must be between 1 and 99.</li><li><strong>Existence Check:</strong> Ensures a required field is not left blank. Ex: The 'Customer ID' field cannot be empty.</li><li><strong>Validity Check:</strong> Compares input against a known list of valid values. Ex: The 'State' field must be one of the 50 valid state codes.</li></ul>",
  },
  {
    term: "A user complains an application is not 'user-friendly.' What are three areas you would investigate?",
    definition:
      "Based on UI principles, you would investigate: <ul><li><strong>Navigation:</strong> Is it confusing for the user to find features or understand where they are in the application? Are there too many clicks to perform a simple task?</li><li><strong>Consistency:</strong> Are similar actions performed in different ways in different parts of the application? Is the terminology inconsistent?</li><li><strong>Feedback:</strong> Does the system inform the user when an action is successful, in progress, or has failed? Is the feedback clear and timely?</li></ul>",
  },
];

const questions_ch9 = [
  {
    term: "Explain the main problems with file-oriented systems and how a DBMS addresses them.",
    definition:
      "File-oriented systems suffer from <strong>data redundancy</strong> (same data in multiple files), <strong>data inconsistency</strong> (updates not applied everywhere), and <strong>lack of data integration</strong>. A DBMS solves this by centralizing data storage, enforcing data integrity rules, and providing a standard interface for all users and applications to access the data, reducing redundancy and ensuring consistency.",
  },
  {
    term: "Define Primary Key, Foreign Key, and Referential Integrity. Explain how they work together.",
    definition:
      "<ul><li><strong>Primary Key (PK):</strong> Uniquely identifies each record in a table.</li><li><strong>Foreign Key (FK):</strong> A field in one table that is a PK in another table. It's used to link the two tables.</li><li><strong>Referential Integrity:</strong> A rule ensuring that a value in a FK column must match an existing value in the corresponding PK column.</li></ul>They work together to create valid, unbreakable links between tables. You can't add an order for a non-existent customer because the customer ID (FK) in the orders table must match a valid customer ID (PK) in the customers table.",
  },
  {
    term: "What is the purpose of Normalization?",
    definition:
      "The purpose of normalization is to design efficient, well-structured tables in a database. It aims to eliminate data redundancy, reduce the potential for data anomalies (like update, insertion, and deletion anomalies), and improve overall data integrity.",
  },
  {
    term: "What is a repeating group and which normal form is designed to eliminate it?",
    definition:
      "A repeating group is a set of logically related fields that can occur multiple times in a single record. For example, storing 'Course1, Course2, Course3' in one student record. <strong>First Normal Form (1NF)</strong> is designed to eliminate repeating groups by placing each instance of the repeating item into its own separate record.",
  },
  {
    term: "Explain the difference between a partial dependency (2NF) and a transitive dependency (3NF).",
    definition:
      "<ul><li><strong>Partial Dependency:</strong> This occurs when a non-key field is dependent on only a part of a composite primary key. It's the issue resolved by moving from 1NF to <strong>2NF</strong>.</li><li><strong>Transitive Dependency:</strong> This occurs when a non-key field is dependent on another non-key field, rather than on the primary key itself. It's the issue resolved by moving from 2NF to <strong>3NF</strong>.</li></ul>",
  },
  {
    term: "You are given a small, unnormalized table and asked to normalize it to 3NF.",
    definition:
      "This type of question requires showing the step-by-step process. Example: <br><strong>Unnormalized:</strong> ORDER(<u>OrderID</u>, OrderDate, <u>PartNum</u>, PartDesc, Qty, CustID, CustName)<br><strong>1NF:</strong> Same as above, assuming no repeating groups.<br><strong>2NF:</strong> Remove partial dependencies. PartDesc depends only on PartNum, and CustName depends only on CustID. <br>-> ORDER(<u>OrderID</u>, <u>PartNum</u>, Qty)<br>-> CUSTOMER(<u>CustID</u>, CustName)<br>-> PART(<u>PartNum</u>, PartDesc)<br><strong>3NF:</strong> Remove transitive dependencies. In the new ORDER table, OrderDate (not shown in 2NF example but should be) would depend on OrderID. The tables shown are already in 3NF as there are no non-key to non-key dependencies.",
  },
  {
    term: "Draw a simple ERD for a clinic system.",
    definition:
      "This is a visual diagram. It would show three entity boxes: DOCTOR, PATIENT, and APPOINTMENT. <br>Relationships:<ul><li>A DOCTOR has a one-to-many relationship with APPOINTMENT (one doctor has many appointments).</li><li>A PATIENT has a one-to-many relationship with APPOINTMENT (one patient has many appointments).</li></ul>The APPOINTMENT entity would have foreign keys for both DoctorID and PatientID.",
  },
  {
    term: "Describe the difference between a one-to-many and a many-to-many relationship.",
    definition:
      "<ul><li><strong>One-to-Many (1:M):</strong> One record in Table A can be related to many records in Table B, but each record in Table B can only be related to one record in Table A. Example: One CUSTOMER can have many ORDERs.</li><li><strong>Many-to-Many (M:N):</strong> One record in Table A can be related to many in Table B, AND one record in Table B can be related to many in Table A. Example: One STUDENT can enroll in many COURSEs, and one COURSE can have many STUDENTs. This is resolved using a third 'linking' or 'junction' table.",
  },
];

const questions_ch10 = [
  {
    term: "What is System Architecture, and what is its main purpose in the SDLC?",
    definition:
      "System Architecture is the translation of a system's logical design into a physical structure. Its main purpose is to create a blueprint that specifies the hardware, software, network infrastructure, and processing methods that will satisfy all system requirements.",
  },
  {
    term: "Define scalability and explain why it is a critical consideration.",
    definition:
      "Scalability is a system's ability to handle increasing or decreasing workloads by easily expanding, changing, or downsizing. It's critical because business needs are not static. A system must be able to grow with the company to avoid performance bottlenecks or the need for a complete redesign in the future.",
  },
  {
    term: "What is the difference between online processing and batch processing? Provide an example.",
    definition:
      "<ul><li><strong>Online Processing (OLTP):</strong> Each transaction is processed immediately as it occurs. Example: An ATM withdrawal, where the account balance must be updated instantly.</li><li><strong>Batch Processing:</strong> Data is collected over a period and processed together in a group. Example: Processing credit card statements at the end of the month.</li></ul>",
  },
  {
    term: "Compare a fat client architecture with a thin client architecture.",
    definition:
      "A <strong>fat client</strong> design places most of the application logic on the client machine, requiring more powerful client hardware. A <strong>thin client</strong> design places most of the logic on the server, allowing for less powerful (and cheaper) client machines. The main advantage of a thin client is lower deployment and maintenance costs, as most updates happen on the server.",
  },
  {
    term: "Explain the difference between a two-tier and a three-tier architecture.",
    definition:
      "A <strong>two-tier</strong> architecture has two layers: the client (UI) and the server (data). A <strong>three-tier</strong> architecture adds a middle layer for business logic. This separates the UI, business rules, and data storage into independent modules. <strong>Middleware</strong> is the software that enables communication between these different tiers.",
  },
  {
    term: "Describe the difference between a star network topology and a bus network topology.",
    definition:
      "In a <strong>bus topology</strong>, all devices share a single common communication line. In a <strong>star topology</strong>, all devices are connected to a central point, like a switch. The star topology is more common today because it is more reliable; if one cable fails, only that one device is affected, whereas a failure on a bus network can take down the entire network.",
  },
  {
    term: "For a large, international bank, would you recommend a two-tier or three-tier architecture? Justify.",
    definition:
      "A <strong>three-tier architecture</strong> would be strongly recommended. A bank has complex business rules (interest calculation, fraud detection) that should be centralized in a business logic tier. This makes the system more secure, easier to maintain and update, and more scalable to handle thousands of employees and millions of transactions, as the tiers can be scaled independently.",
  },
  {
    term: "A new social media company expects exponential growth. What architectural consideration must they prioritize?",
    definition:
      "They must prioritize <strong>scalability</strong>. Exponential growth means the system will need to handle a rapidly increasing number of users, posts, and interactions. A scalable architecture (e.g., using cloud computing and a three-tier or n-tier design) will allow them to add more resources (servers, databases) as needed without a system failure or complete overhaul.",
  },
];

// --- DECK SETUP ---
let activeDeck = [];
let currentIndex = 0;
let activeDeckType = "terms";

// --- DOM ELEMENTS ---
const card = document.getElementById("card");
const cardFront = document.getElementById("card-front-content");
const cardBack = document.getElementById("card-back-content");
const cardCounter = document.getElementById("card-counter");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const chapterSelect = document.getElementById("chapter-select");
const termsBtn = document.getElementById("terms-btn");
const questionsBtn = document.getElementById("questions-btn");
const explainBtn = document.getElementById("explain-btn");
const generateQuestionBtn = document.getElementById("generate-question-btn");
const questionModal = document.getElementById("question-modal");
const modalBody = document.getElementById("modal-body");
const closeModalBtn = document.getElementById("close-modal-btn");

// --- FUNCTIONS ---
function displayCard() {
  if (card.classList.contains("flipped")) {
    card.classList.remove("flipped");
  }

  if (activeDeck.length === 0) {
    cardFront.innerHTML = "Deck is empty!";
    cardBack.innerHTML = "Select another deck.";
    cardCounter.textContent = "0 / 0";
    return;
  }

  const flashcard = activeDeck[currentIndex];
  cardFront.innerHTML = flashcard.term;
  cardBack.innerHTML = `<div class="flex-grow">${flashcard.definition}</div>`;
  cardCounter.textContent = `${currentIndex + 1} / ${activeDeck.length}`;
}

function showNextCard() {
  if (activeDeck.length === 0) return;
  currentIndex = (currentIndex + 1) % activeDeck.length;
  displayCard();
}

function showPrevCard() {
  if (activeDeck.length === 0) return;
  currentIndex = (currentIndex - 1 + activeDeck.length) % activeDeck.length;
  displayCard();
}

function shuffleDeck() {
  for (let i = activeDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [activeDeck[i], activeDeck[j]] = [activeDeck[j], activeDeck[i]];
  }
  currentIndex = 0;
  displayCard();
}

function loadDeck() {
  const chapter = chapterSelect.value;

  termsBtn.classList.toggle("active", activeDeckType === "terms");
  questionsBtn.classList.toggle("active", activeDeckType === "questions");

  if (activeDeckType === "terms") {
    if (chapter === "6") activeDeck = terms_ch6;
    else if (chapter === "8") activeDeck = terms_ch8;
    else if (chapter === "9") activeDeck = terms_ch9;
    else if (chapter === "10") activeDeck = terms_ch10;
  } else {
    if (chapter === "6") activeDeck = questions_ch6;
    else if (chapter === "8") activeDeck = questions_ch8;
    else if (chapter === "9") activeDeck = questions_ch9;
    else if (chapter === "10") activeDeck = questions_ch10;
  }
  shuffleDeck();
}

// --- GEMINI API CALL ---
async function callGemini(prompt) {
  const apiKey = "AIzaSyAHhrfP36GeWn2O-Y7Pw2dSI6O-uvMb33I"; // Leave empty, handled by environment
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("API Error Response:", errorBody);
      if (response.status === 400) {
        return "There was a problem with the request. Please check if your API key is valid and active.";
      }
      throw new Error(`API error: ${response.statusText}`);
    }

    const result = await response.json();
    if (
      result.candidates &&
      result.candidates.length > 0 &&
      result.candidates[0].content &&
      result.candidates[0].content.parts &&
      result.candidates[0].content.parts.length > 0
    ) {
      return result.candidates[0].content.parts[0].text;
    } else {
      console.warn("Unexpected API response structure:", result);
      return "Sorry, I couldn't get a valid response. Please try again.";
    }
  } catch (error) {
    console.error("Gemini API call failed:", error);
    return "An error occurred while contacting the AI. Please check the console and ensure your API key is correct.";
  }
}

// --- EVENT LISTENERS ---
card.addEventListener("click", () => card.classList.toggle("flipped"));
nextBtn.addEventListener("click", showNextCard);
prevBtn.addEventListener("click", showPrevCard);
shuffleBtn.addEventListener("click", shuffleDeck);
chapterSelect.addEventListener("change", loadDeck);

termsBtn.addEventListener("click", () => {
  activeDeckType = "terms";
  loadDeck();
});

questionsBtn.addEventListener("click", () => {
  activeDeckType = "questions";
  loadDeck();
});

explainBtn.addEventListener("click", async (e) => {
  e.stopPropagation(); // Prevent card from flipping back
  const originalButtonText = explainBtn.innerHTML;
  explainBtn.innerHTML = "Thinking...";
  explainBtn.disabled = true;

  const currentCard = activeDeck[currentIndex];
  // Remove HTML tags from definition for a cleaner prompt
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = currentCard.definition;
  const cleanDefinition = tempDiv.textContent || tempDiv.innerText || "";

  const prompt = `The term is "${currentCard.term}". The definition is "${cleanDefinition}". Please explain this concept in a different way, using a simple real-world analogy. Keep it concise.`;

  const newExplanation = await callGemini(prompt);

  // Re-add the original definition and the new explanation
  const backContentDiv = document.getElementById("card-back-content");
  backContentDiv.innerHTML = `<div class="flex-grow">${currentCard.definition}<hr class="my-4 border-white/30"><p class="text-sm italic"><strong>✨ Alternate Explanation:</strong> ${newExplanation}</p></div>`;

  explainBtn.innerHTML = originalButtonText;
  explainBtn.disabled = false;
});

generateQuestionBtn.addEventListener("click", async () => {
  const originalButtonText = generateQuestionBtn.innerHTML;
  generateQuestionBtn.innerHTML = "Generating...";
  generateQuestionBtn.disabled = true;

  const selectedOption = chapterSelect.options[chapterSelect.selectedIndex];
  const topic = selectedOption.dataset.topic;

  const prompt = `You are a helpful study assistant. Generate one new, unique, exam-style practice question about "${topic}". The question should be different from the ones in a standard textbook. Provide a clear question and a concise answer. Format the output as: "<strong>Question:</strong> [Your Question]<br><br><strong>Answer:</strong> [Your Answer]"`;

  modalBody.innerHTML = "<p>Generating a new question, please wait...</p>";
  questionModal.classList.add("visible");

  const result = await callGemini(prompt);
  const formattedResult = result.replace(/\n/g, "<br>");
  modalBody.innerHTML = formattedResult;

  generateQuestionBtn.innerHTML = originalButtonText;
  generateQuestionBtn.disabled = false;
});

closeModalBtn.addEventListener("click", () => {
  questionModal.classList.remove("visible");
});

questionModal.addEventListener("click", (e) => {
  if (e.target === questionModal) {
    questionModal.classList.remove("visible");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") showNextCard();
  else if (e.key === "ArrowLeft") showPrevCard();
  else if (e.key === " ") {
    e.preventDefault();
    card.classList.toggle("flipped");
  }
});

// --- INITIALIZATION ---
loadDeck();
