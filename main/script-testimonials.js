const container = document.getElementById('testimonialsContainer');
if (container) { // Only run if testimonials section exists

  const numColumns = 5;
  const boxesPerColumnBase = 5; // Number of unique boxes
  const totalBoxesNeeded = numColumns * boxesPerColumnBase;

  const sampleTestimonials =[
  {
  "text": "Native Nexus transformed my approach to mobile development. The 6-day immersive React Native workshop took me from basic concepts to building a complete AI-powered expense management app with Google Gemini integration. DevLabs' mission of empowering developers through hands-on experience truly came to life!",
  "author": "Arjun Mehta",
  "gender": "male"
  },
  {
  "text": "Coming from a non-CS background was intimidating, but DevLabs made Flutter accessible for me. Their collaborative learning environment helped me build confidence. The React Native & Expo techniques I learned during Native Nexus let me create cross-platform apps with beautiful UI and animations that I never thought possible!",
  "author": "Priya Sharma",
  "gender": "female"
  },
  {
  "text": "The AWS certification track at DevLabs gave me practical cloud experience beyond theory. Being part of the 100 curated developers for Native Nexus was a game-changer—implementing NodeJS and MongoDB backend-as-a-service taught me real-world scalability principles I now use daily.",
  "author": "Vikram Choudhury",
  "gender": "male"
  },
  {
  "text": "Never thought I'd get into machine learning until DevLabs' PyTorch study group. Working with TensorFlow and seeing how it integrated with the AI-powered features in the Native Nexus project opened my eyes to practical applications of ML. Now I'm contributing to an open-source computer vision project!",
  "author": "Ananya Desai",
  "gender": "female"
  },
  {
  "text": "Building IoT prototypes with DevLabs' Raspberry Pi hackathons completely changed my career path. Connecting sensor networks to the cloud infrastructure we learned about in their workshops turned my weekend hobby into a smart agriculture startup. DevLabs truly lives up to its mission of empowering developers to shape the future.",
  "author": "Rahul Joshi",
  "gender": "male"
  },
  {
  "text": "The Node.js masterclass series prepared me perfectly for Native Nexus, where we implemented a complete backend for real-time group expense splitting. From callback hell to clean async/await patterns, DevLabs helped me write production-ready code that integrated seamlessly with MongoDB.",
  "author": "Nandini Patel",
  "gender": "female"
  },
  {
  "text": "Transitioning from QA to DevOps seemed impossible until I joined DevLabs' Docker and Terraform workshops. Their focus on Cloud & DevOps with AWS, Azure, and GCP gave me practical skills I immediately added to my resume. The collaborative learning environment they foster is exactly what tech education should be.",
  "author": "Karthik Iyer",
  "gender": "male"
  },
  {
  "text": "The Google Gemini integration challenge during Native Nexus pushed me beyond my comfort zone. Implementing NLP-powered text-to-expense parsing in just 12+ hours of focused development taught me more about AI applications than an entire semester of theory. DevLabs' approach to innovation through immersive experiences works!",
  "author": "Shreya Narayan",
  "gender": "female"
  },
  {
  "text": "As a self-taught programmer, React Native always intimidated me. Native Nexus' incremental approach made it digestible. Building a complete Splitwise clone with AI capabilities alongside 99 other developers created a motivating environment where we constantly learned from each other.",
  "author": "Aditya Singhania",
  "gender": "male"
  },
  {
  "text": "The Vue ecosystem seemed overwhelming until I participated in DevLabs' component architecture workshop. This foundation prepared me for Native Nexus where we built custom cards and responsive layouts for our expense management app. Their methodology of breaking down complex apps into manageable pieces transformed my approach.",
  "author": "Kavita Reddy",
  "gender": "female"
  },
  {
  "text": "DevLabs' Arduino weekend workshops connected perfectly with their IoT & Electronics focus area. The mentors patiently worked with me through countless sensor network configurations. The physical-digital integration principles I learned apply beautifully to the smart home solutions I'm now developing.",
  "author": "Siddharth Verma",
  "gender": "male"
  },
  {
  "text": "The GCP certification study group at DevLabs aligned perfectly with their Cloud & DevOps focus area. We tackled complex scenarios together, and I went from cloud novice to deploying microservices architecture in 4 months. This foundation was essential during Native Nexus when implementing backend services.",
  "author": "Meera Krishnan",
  "gender": "female"
  },
  {
  "text": "Honestly didn't expect much from another 'coding community,' but DevLabs proved me wrong. Their Kotlin track provided structure while allowing creative freedom. The cross-platform principles I learned transferred perfectly to Native Nexus, where we built an AI-powered expense management app that now has 10k+ downloads!",
  "author": "Rohan Malhotra",
  "gender": "male"
  },
  {
  "text": "The scikit-learn data analysis workshops completely changed my approach to problem-solving. When we integrated Google Gemini for NLP during Native Nexus, everything clicked! DevLabs' mission of connecting theory with real-world applications has transformed how I implement ML techniques in my research.",
  "author": "Divya Nair",
  "gender": "female"
  },
  {
  "text": "Terraform seemed like magic until DevLabs demystified infrastructure as code. Their focus on Cloud & DevOps across AWS, Azure, and GCP gave me a comprehensive foundation. During Native Nexus, this knowledge helped our team create a scalable backend for the expense management application.",
  "author": "Nikhil Agarwal",
  "gender": "male"
  },
  {
  "text": "Struggling with imposter syndrome as a woman in tech, DevLabs' female-led Angular workshop was exactly what I needed. This confidence allowed me to thrive during Native Nexus, where I led the UI animations team for our expense management app. The supportive environment helped me build both technical skills and leadership abilities.",
  "author": "Tanvi Kapoor",
  "gender": "female"
  },
  {
  "text": "The sensor networks lab at DevLabs gave me hands-on experience with IoT deployments. Working with Arduino and Raspberry Pi to solve connectivity issues taught me debugging skills I later applied during Native Nexus when integrating Google Gemini for smart chatbots in our expense app.",
  "author": "Arnav Bose",
  "gender": "male"
  },
  {
  "text": "Swift development felt unapproachable until DevLabs' iOS hackathon weekend. The mentors broke down complex patterns, which prepared me for Native Nexus where we had to build cross-platform apps with beautiful UI and custom cards. Now I'm freelancing as a mobile developer while finishing my degree!",
  "author": "Roshni Gupta",
  "gender": "female"
  },
  {
  "text": "The Azure DevOps pipeline automation challenge in DevLabs' Cloud & DevOps track completely changed my understanding of CI/CD. This knowledge was invaluable during Native Nexus when we needed to create a production-ready app in just 12+ hours of development time.",
  "author": "Vivek Mathur",
  "gender": "male"
  },
  {
  "text": "Jumping into DevLabs' advanced React patterns workshop prepared me perfectly for Native Nexus. Working with 99 other developers to build a complete Splitwise clone with AI capabilities taught me more about component composition and state management than any tutorial could.",
  "author": "Pooja Thakur",
  "gender": "female"
  },
  {
  "text": "DevLabs' computer vision challenge using PyTorch pushed me to learn at lightning speed. This foundation in the Machine Learning focus area helped me during Native Nexus when implementing Google Gemini for NLP-powered text-to-expense parsing. The mentorship was personalized and genuinely invested in shaping my future.",
  "author": "Sameer Malik",
  "gender": "male"
  },
  {
  "text": "Microservices architecture made sense conceptually but implementing it seemed daunting until DevLabs' Node.js workshops. During Native Nexus, I applied these principles to create a backend-as-a-service for instant scalability and real-time group expense splitting. Their practical approach fundamentally changed how I architect systems.",
  "author": "Neha Chauhan",
  "gender": "female"
  },
  {
  "text": "The Flutter UI challenge at DevLabs prepared me for the intensive UI work during Native Nexus. Creating custom cards and animations for our AI-powered expense management app pushed me to think beyond basic design. I'm now leading mobile development at my startup thanks to these hands-on experiences.",
  "author": "Kunal Sharma",
  "gender": "male"
  },
  {
  "text": "Coming from a design background, I never thought I'd understand serverless architecture. DevLabs' AWS Lambda workshops prepared me for Native Nexus where we implemented NodeJS backend services. The 6-day immersive experience was perfectly paced while still being challenging!",
  "author": "Aisha Patel",
  "gender": "female"
  },
  {
  "text": "DevLabs' Raspberry Pi robotics track rekindled my passion for hardware. Their IoT & Electronics focus area gave me practical skills in sensor networks that complemented what we learned during Native Nexus. The hands-on approach to teaching embedded systems made theoretical concepts concrete.",
  "author": "Vijay Sundaram",
  "gender": "male"
  },
  {
  "text": "The data visualization masterclass with D3.js and TensorFlow at DevLabs prepared me for implementing AI features during Native Nexus. Working with Google Gemini to create smart chatbots for debt resolution showed me how ML can improve everyday applications. I went from struggling with basic charts to building interactive AI interfaces in weeks!",
  "author": "Lakshmi Ranganathan",
  "gender": "female"
  },
  {
  "text": "Docker containerization felt like rocket science until DevLabs broke it down in their Cloud & DevOps track. This knowledge was crucial during Native Nexus when deploying our production-ready Splitwise clone. Their approach of building increasingly complex environments helped concepts stick.",
  "author": "Ritesh Kumar",
  "gender": "male"
  },
  {
  "text": "The progressive web app challenge at DevLabs prepared me for the responsive layouts we implemented during Native Nexus. Being part of the 100 curated developers who built a complete expense management app with React Native & Expo in just 6 days was transformative. Their Web Development focus truly shapes the future of tech education.",
  "author": "Jyoti Verma",
  "gender": "female"
  },
  {
  "text": "Finding DevLabs in my second year completely redirected my career path. Their IoT workshops with Arduino and Raspberry Pi connected my electrical engineering background with modern programming. The collaborative innovation environment they foster aligned perfectly with their mission of empowering developers.",
  "author": "Harish Tiwari",
  "gender": "male"
  },
  {
  "text": "Participating in Native Nexus and implementing Google Gemini for NLP made me think critically about AI ethics beyond just technical implementation. DevLabs' approach to technology as a social responsibility has influenced how I approach every project since. Their mission of shaping the future through innovation rings true in everything they do.",
  "author": "Anjali Bhardwaj",
  "gender": "female"
  }
  ];

  // Ensure we have enough unique testimonials
  while (sampleTestimonials.length < totalBoxesNeeded) {
      const gender = sampleTestimonials.length % 2 === 0 ? 'male' : 'female'; // Alternate for placeholders
      sampleTestimonials.push({ 
          text: `Placeholder testimonial ${sampleTestimonials.length + 1}.`, 
          author: `Author ${sampleTestimonials.length + 1}`, 
          gender: gender 
      });
  }

  let testimonialIndex = 0;
  let columns = []; // Keep track of columns

  // Function to get random height
  function getRandomHeight() {
      const minH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--min-box-height'));
      const maxH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--max-box-height'));
      return Math.floor(Math.random() * (maxH - minH + 1)) + minH;
  }

  for (let i = 0; i < numColumns; i++) {
      const column = document.createElement('div');
      column.classList.add('column');
      columns.push(column); // Add column to array

      const columnBoxesData = [];
      for (let j = 0; j < boxesPerColumnBase; j++) {
           const testimonial = sampleTestimonials[testimonialIndex % sampleTestimonials.length];
           columnBoxesData.push(testimonial);
           testimonialIndex++;
      }

      // Duplicate the boxes within the column for seamless looping
      const duplicatedBoxesData = [...columnBoxesData, ...columnBoxesData];

      duplicatedBoxesData.forEach(testimonialData => {
          const box = document.createElement('div');
          box.classList.add('testimonial-box');
          // Assign random height
          box.style.height = `${getRandomHeight()}px`;

          const iconSrc = testimonialData.gender === 'female' ? 'female.jpg' : 'man.png';
          const iconAlt = testimonialData.gender === 'female' ? 'Female icon' : 'Male icon';

          box.innerHTML = `
              <p>${testimonialData.text}</p>
              <strong>
                  <img src="${iconSrc}" alt="${iconAlt}" class="author-icon">
                  - ${testimonialData.author}
              </strong>`;

          box.addEventListener('mouseover', () => {
              const parentColumn = box.closest('.column');
              const parentIndex = columns.indexOf(parentColumn);

              // Pause only the hovered column
              if (parentColumn) {
                  parentColumn.classList.add('pause-animation');
                  box.classList.add('is-hovered');

                  // Push adjacent columns aside
                  columns.forEach((col, index) => {
                      if (index < parentIndex) {
                          col.classList.add('is-pushed-left');
                      } else if (index > parentIndex) {
                          col.classList.add('is-pushed-right');
                      }
                  });
              }
          });

          box.addEventListener('mouseout', () => {
              const parentColumn = box.closest('.column');
              if (parentColumn) {
                  // Resume animation
                  parentColumn.classList.remove('pause-animation');
                  box.classList.remove('is-hovered');

                  // Reset pushed columns
                  columns.forEach(col => {
                      col.classList.remove('is-pushed-left', 'is-pushed-right');
                  });
              }
          });
          column.appendChild(box);
      });
      container.appendChild(column);
  }

  // Add overlay and close button INSIDE the testimonials container
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  container.appendChild(overlay);

  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');
  closeButton.innerHTML = '×';
  container.appendChild(closeButton);

  // Update touch handlers
  let touchStartX = 0;
  let touchStartY = 0;
  let isSwiping = false;

  function handleTouchStart(e) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      isSwiping = false;
  }

  function handleTouchMove(e) {
      if (!touchStartX || !touchStartY) return;

      const touchEndX = e.touches[0].clientX;
      const touchEndY = e.touches[0].clientY;

      const deltaX = touchStartX - touchEndX;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
          isSwiping = true;
      }
  }

  function handleTouchEnd(e) {
      if (isSwiping) {
          e.preventDefault();
          return;
      }

      const box = e.target.closest('.testimonial-box');
      if (box) {
          const parentColumn = box.closest('.column');
          if (parentColumn) {
              // Pause all animations
              document.querySelectorAll('.column').forEach(col => {
                  col.style.animationPlayState = 'paused';
              });
              
              // Show expanded view
              box.classList.add('is-hovered');
              overlay.classList.add('active');
              document.body.style.overflow = 'hidden';
              closeButton.style.display = 'flex';
          }
      }
  }

  // Close expanded view
  function closeExpandedView() {
      document.querySelectorAll('.testimonial-box.is-hovered').forEach(box => {
          box.classList.remove('is-hovered');
      });
      
      // Resume all animations
      document.querySelectorAll('.column').forEach(col => {
          col.style.animationPlayState = 'running';
      });
      
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      closeButton.style.display = 'none';
  }

  // Update close handlers
  closeButton.addEventListener('click', closeExpandedView);
  overlay.addEventListener('click', closeExpandedView);

  // Add touch events to boxes
  document.querySelectorAll('.testimonial-box').forEach(box => {
      box.addEventListener('touchstart', handleTouchStart, { passive: true });
      box.addEventListener('touchmove', handleTouchMove, { passive: true });
      box.addEventListener('touchend', handleTouchEnd);
  });
}

// Do not run any code outside this if-block
