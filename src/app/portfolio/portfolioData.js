// portfolioData.js
const portfolioItems = [
  {
    id: 1,
    title: 'Central Bank Digital Currency',
    image: '/cbdc/cbdc.png',
    description: `
# Central Bank Digital Currency (CBDC) System with FPGA Integration

In this project, I developed a secure and efficient Central Bank Digital Currency (CBDC) system by leveraging private blockchain technology using **Hyperledger Fabric**. My main focus was to promote financial inclusion and streamline digital transactions, while ensuring robust cryptographic security. One of the most innovative aspects of this system is the integration of an **FPGA (Field-Programmable Gate Array)** to offload computational tasks, which I managed entirely—from initial setup to data retrieval.

## Project Overview

Here's what I built and accomplished in this project:

1. **Private Blockchain Technology**
   I used Hyperledger Fabric to build a permissioned blockchain that ensures secure and traceable CBDC transactions within a trusted network.

2. **FPGA Integration**
   I architected a system where transaction details are sent to an FPGA for computational processing. After the FPGA completes the intensive tasks, I retrieve the processed data and commit it to blockchain blocks—drastically improving processing speed and efficiency.

3. **Enhanced Financial Inclusion**
   This CBDC system is designed to expand access to financial services, particularly for underbanked or unbanked populations.

4. **Streamlined Transactions**
   By optimizing data handling and reducing computation bottlenecks, I ensured faster and more efficient digital currency transactions.

5. **Robust Cryptographic Security**
   I implemented strong cryptographic measures to safeguard transaction data and preserve the integrity of the system.

6. **Advanced Consensus Mechanisms**
   I utilized Hyperledger Fabric's pluggable consensus protocols for dependable and secure validation of transactions.

7. **Smart Contract Functionality**
   I incorporated smart contracts to enforce transaction rules and automate key processes across the network.

8. **Regulatory Compliance Features**
   The system is built with features that allow for integration into existing financial frameworks and ensure compliance with regulatory requirements.

    `,
    systemDesignImage: '/cbdc/daigram.png',
    techUsed: 'Hyperledger Fabric, Wsl, Docker, Golang, Node.js',
    githubLink: 'https://github.com/Furqan3/fabric',
    videoLink: '',
    siteLink: '',
    category: 'Private Blockchain(FYP)',
    year: '2024'
  },
  {
    id: 2,
    title: 'Histopathological Image Analysis',
    image: '/hia/image.png',
    description: `

# Histopathological Image Analysis — Image Segmentation and Classification

In this project, I implement image segmentation and classification using a U-Net model alongside a custom classification model. My goal is to accurately segment histopathological images into different classes and then classify them accordingly.

## Project Overview

The project is structured into several key components:

1. **Data Preparation**: I load the images and their corresponding masks from the dataset provided. During preprocessing, I apply gamma correction and convert the images to RGB format. The masks are one-hot encoded based on a specific colormap to prepare them for training.

2. **U-Net Model**: I use the U-Net architecture for segmenting the images. The model is trained on the prepared data to identify and segment different classes in the images using the masks as ground truth.

3. **Custom Classification Model**: After segmentation, I implement a custom classification model that takes the segmented images as input and classifies them into the desired classes. This model is trained specifically to improve classification accuracy on the segmented outputs.

4. **Evaluation**: I evaluate the performance of both the segmentation and classification models using various metrics such as the confusion matrix and accuracy score. This helps me understand how well the models are performing.

## Usage

1. **Data Preparation**: I run the \`Prepare_Data\` class to load and preprocess the images and masks. I specify the correct paths for the images and masks, and adjust the gamma correction and color conversion parameters if necessary.

2. **Model Training**: I train the U-Net model for segmentation and the custom classification model for classification. I define the architectures, loss functions, optimizers, and other hyperparameters as needed, then train the models using the prepared data.

3. **Model Evaluation**: Finally, I evaluate the trained models by calculating relevant metrics and visualizing the confusion matrix to assess the accuracy of the classification.

## Dataset

For this project, I use the provided dataset that contains histopathological images along with their corresponding masks. Before running the code, I make sure to place the dataset in the specified directories (image\_path and mask\_path).



    `,
    techUsed: 'Python, OpenCV, NumPy, TensorFlow, Scikit-learn, Matplotlib, Keras',
    systemDesignImage: '/hia/daigram.png',
    githubLink: 'https://github.com/Furqan3/Histopathological-Images-Analysis',
    videoLink: '',
    siteLink: '',
    category: 'Machine Learning',
    year: '2024'
  },
  {
    id: 3,
    title: ' Skin Lesion Classification Using Image Processing',
    image: '/melanoma/image.png',
    description: `
# Skin Lesion Classification Using Image Processing

In this project, I aim to classify skin lesions into two categories: normal and melanoma. The classification is based on four features that I extract from images of skin lesions using image processing techniques. These four features are asymmetry, border, color, and diameter.

### Features

* **Asymmetry**
  I measure asymmetry by assessing the difference in shape between the left and right halves of a skin lesion. To do this, I divide the lesion into four quadrants and compute the entropy of the pixel intensity distribution within each quadrant.

* **Border**
  To quantify the irregularity of the lesion's border, I erode the grayscale image of the lesion and then calculate the circularity of the difference between the original grayscale image and the eroded image.

* **Color**
  For color variation, I convert the lesion image to the YUV color space and compute the standard deviation of the mean Y, U, and V values across the lesion area.

* **Diameter**
  I estimate the size of the lesion by finding the maximum and minimum pixel coordinates within the lesion and calculating the Euclidean distance between these two points.

### Dataset

For this project, I use the PH2 Dataset, which contains 200 skin lesion images. The dataset is divided into two classes: normal and melanoma.

### Results

The classification pipeline achieves an accuracy of:

\`
Accuracy: 0.83
\`

### Feature Data and Analysis

I also analyze the extracted features through statistical plots like box plots, histograms, and scatter plots to better understand the data distribution and relationships, which helped in tuning the classifier.



    `,
     systemDesignImage: '/melanoma/daigram.png',
    techUsed: 'Python, Matplotlib, Numpy, OpenCV, Pandas',
    githubLink: 'https://github.com/Furqan3/Skin-Lesion-Classification',
    videoLink: '',
    siteLink: '',
    category: 'Artificial Intelegence',
    year: '2023'
  },
  {
    id: 4,
    title: 'ML Price Predictor',
    image: '/Briell/Briell.png',
     systemDesignImage: '/Briell/daigram.png',
    description: `
# Braille Language Decoding Using Connected Component Analysis (CCA)

## Introduction

In this project, I aimed to decode Braille language images by applying Connected Component Analysis (CCA), a powerful image processing technique. CCA allows me to segment and extract meaningful components from images, which is essential for analyzing objects like Braille dots.

Braille is a tactile writing system used by visually impaired people. Each Braille character consists of six raised dots arranged in a 3 × 2 matrix. My goal was to develop a generic algorithm that can decode any Braille sequence image into the corresponding English text by separating the Braille dots from the background using 8-connectivity based CCA.

---

## Approach

### Step 1: Image Preprocessing

I start by converting the grayscale Braille image into a binary image and then invert it so that the dots become bright (value 255) and the background becomes dark. This preprocessing step makes it easier to detect the dots.

- **Set V = {255}** to represent the bright dots after inversion.

### Step 2: Slicing the Image

I slice the image row-wise to analyze each row independently. Using Python slicing, I extract each row as a separate image segment. This approach helps me focus on the dots in each row without interference from other parts of the image.

### Step 3: Detecting Dotted Rows

I iterate over each row to detect the presence of dots. For this, I define a threshold pixel intensity above which a pixel is considered a dot. If any pixel in a row crosses this threshold, I mark that row as a dotted row.

### Step 4: Detecting Dotted Columns

Similarly, I iterate over each column and apply the same intensity threshold to detect dotted columns. The columns that contain dots are identified to help form Braille cells.

### Step 5: Constructing Braille Cells

Using the ranges of dotted rows and columns, I group dots into Braille cells. Each Braille cell consists of six dot positions arranged in a 2x3 matrix. I check the presence or absence of dots at each position within the cell by comparing their coordinates to the detected dotted rows and columns.

### Step 6: Decoding Braille Cells

To decode each Braille cell, I created a lookup table that maps each unique Braille dot pattern to its corresponding English alphabet. I match the detected cell patterns against this table to translate the Braille into English letters.

---

## Results

By applying the above algorithm, I successfully decoded Braille sequences from images into readable English text. The algorithm is generic enough to handle any Braille image containing multiple characters arranged in sequences.

---

## Conclusion

This project demonstrated how Connected Component Analysis can be effectively used to segment and decode Braille images. The step-by-step approach—preprocessing, slicing, dot detection, cell construction, and decoding—allowed me to convert tactile Braille patterns into understandable English text.

---

## Future Work

- Improve dot detection accuracy by adaptive thresholding.
- Extend the algorithm to handle noisy or partially damaged Braille images.
- Implement real-time Braille decoding from camera input.



    `,
    techUsed: 'Python, OpenCV, Numpy',
    githubLink: 'https://github.com/Furqan3/Braille-Language-Decoding',
    videoLink: '',
    siteLink: '',
    category: 'Artificial Intelegence',
    year: '2023'
  },
   {
    id: 6,
    title: 'NodeMCU Color Sorter',
    image: '/color/nodemcu.png',
    description: `
# NodeMCU Color Sorter

## Introduction

This is my semester project for the subject *Microprocessor and Microcontroller Based Design*. The main idea behind the project is to sort mixed color balls automatically.

## Working

The working principle is quite simple. The user places mixed colorful balls onto a slide. A color sensor detects the color of each ball and directs it to its specific cup for sorting.

## Materials Used

- NodeMCU
- Color Sensor (TCS3200)
- Servo Motors (2x)
- Jumper Wires
- Breadboard
- Cardboard
- Color Balls
- Cups
- Micro USB Cable

## Limitation

Currently, the system can detect and sort only three colors: **Red**, **Green**, and **Blue**.

    `,
    techUsed: 'NodeMCU, TCS3200 Color Sensor, Servo Motors, Breadboard, Jumper Wires, Micro USB Cable, MicroPython, Arduino IDE',
    githubLink: 'https://github.com/your-repo/dbms',
    videoLink: '/color/demo.mp4',
    systemDesignImage: '/color/image.png',
    siteLink: '',
    category: 'IOT',
    year: '2023'
  },
  {
    id: 5,
    title: 'Ocean Shooter Combat Game',
    image: '/game/oceangame.png',
    systemDesignImage: '/game/daigram.png',
    description: 
    `
# Ocean Shooter Combat Game

## Introduction

I developed **Ocean Shooter Combat Game**, an exciting multiplayer game where players control submarines and battle enemies like sharks in an ocean environment. The game offers several engaging modes including multiplayer, mission mode, and endless mode, making the gameplay diverse and enjoyable.

To enhance player interaction, I integrated both text chat and voice messaging, allowing players to communicate seamlessly during battles. I built the game using Python, leveraging libraries like Pygame for graphics, Pyaudio for voice communication, and Pysocket for networking.

---

## Features

- **Multiplayer Mode:** I designed the game to allow online real-time submarine battles where players can team up or compete against others.
- **Text Chat & Voice Messaging:** Players can communicate using an in-game text chat or voice messaging system, making teamwork and strategy planning easier.
- **2 Players Mode:** I included a local mode where two players can play on the same keyboard, competing against each other.
- **Mission Mode:** I created challenging missions with specific objectives to keep players engaged and motivated to progress.
- **Endless Mode:** For players who want to test their skills, endless mode increases the difficulty as they survive waves of enemies.
- **Intuitive Controls:** Submarine movements are controlled via keyboard (arrow keys or WASD), and players can fire torpedoes or use power-ups using the spacebar.
- **Upgrades & Power-ups:** Collecting power-ups enhances the submarine's abilities and firepower.
- **Immersive Graphics & Sounds:** I focused on creating visually appealing graphics and immersive sound effects to bring the underwater battles to life.

---


## Usage

- **Main Menu:** When launching the game, select your preferred mode: multiplayer, mission mode, or endless mode.
- **Multiplayer:** Connect online to battle other players. Use chat or voice messaging to communicate.
- **2 Players Mode:** Play locally with a friend using one or two keyboards.
- **Mission Mode:** Complete missions to unlock new features and upgrades.
- **Endless Mode:** Survive as long as possible against increasingly tough enemies.
- **Controls:** Use arrow keys or WASD to move, and spacebar to fire torpedoes or activate power-ups.

---

## Development

If you want to contribute:

1. Fork the repository on GitHub.
2. Clone your forked repository.
3. Make your changes.
4. Test thoroughly.
5. Create a pull request with a clear description of your changes.



    `
    ,
    techUsed: 'Python, Pygame, Pysocket, Pyaudio',
    githubLink: 'https://github.com/Furqan3/Ocean-Shooter-Combat-Game',
    videoLink: '',
    siteLink: '',
    category: 'Game Development',
    year: '2023'
  }
 
];

export default portfolioItems;
