const projects = {
  "fia": {
    title: "Finance Intelligence App (FIA)",
    description: `
      <ul>
        <li><strong>Role:</strong> Lead Developer</li>
        <li>Designed and developed an <b>AI-powered financial intelligence</b> system using <b>Power Platform, Python, and Django</b>.</li>
        <li>Built <b>real-time interactive dashboards</b> using Power BI for revenue and loss tracking, enabling data-driven decision-making.</li>
        <li>Implemented <b>power automation techniques</b> to streamline complex financial calculations and enhance reporting efficiency.</li>
      </ul>
      <p><b>Technologies:</b> Power App, Power Automate, Power BI, Python, Django</p>
    `
  },
  "cala-bot": {
    title: "AI Chatbot Development (CALA Bot)",
    description: `
      <ul>
        <li><strong>Role:</strong> Lead Developer</li>
        <li>Developed an <b>AI-driven chatbot</b> using <b>Microsoft Copilot Studio</b> and machine learning.</li>
        <li>Implemented <b>Natural Language Processing (NLP)</b> for intelligent query handling and improved user engagement.</li>
        <li>Integrated third-party APIs to enhance chatbot functionality, automating responses and streamlining customer interactions.</li>
      </ul>
    `
  },
  "brochure-app": {
    title: "AI-Driven Product Brochure App",
    description: `
      <ul>
        <li><strong>Role:</strong> Project Lead</li>
        <li>Led a team to develop an <b>AI-powered content automation</b> system for marketing materials.</li>
        <li>Streamlined event and campaign content generation, reducing manual effort by <b>70%</b>.</li>
        <li>Enabled <b>personalized brochure generation</b> using AI, improving customer outreach and brand visibility.</li>
      </ul>
      <p><b>Technologies:</b> OpenAI GPT-4 APIs, PHP OOP (v8.2), MySQL 8, HTML5, CSS3, JavaScript ES19, jQuery 3.7.0, Bootstrap 5.3</p>
    `
  },
  "open-edx": {
    title: "Open edX: MOOC Platform Customization & Deployment",
    description: `
      <ul>
        <li><strong>Role:</strong> Full-Stack Developer & Cloud Engineer</li>
        <li><b>Customized Core Open edX Services:</b> Modified LMS, CMS, eCommerce, and discussion modules to align with business needs.</li>
        <li><b>Automated Multi-Tenant Deployment:</b> Implemented Django multi-threading for seamless scalability and resource optimization.</li>
        <li><b>Cloud & Performance Optimization:</b> Migrated static and media files to <b>Azure Blob Storage</b> and integrated <b>AWS S3</b> for scalable content delivery.</li>
        <li><b>Authentication & Security Enhancements:</b> Integrated Google & Microsoft SSO, developed a custom OAuth provider, and enforced HTTPS security policies.</li>
        <li><b>UI/UX Enhancements & Plugin Development:</b> Customized UI using <b>Comprehensive Theming</b> and developed custom XBlocks for interactive learning experiences.</li>
      </ul>
    `
  },
  "product-app": {
    title: "Enterprise Product App (PA)",
    description: `
      <ul>
        <li><strong>Role:</strong> Lead Developer</li>
        <li>Developed an <b>AI-powered enterprise application</b> for <b>module generation, course creation, proposal automation, session scheduling, and task management.</b></li>
        <li>Incorporated <b>ChatGPT</b> for intelligent content recommendations and workflow automation.</li>
        <li>Built using <b>PHP 8.2</b> and <b>Laravel</b> to ensure high scalability and seamless integration.</li>
      </ul>
    `
  }, 
  "sbir": {
    title: "Sketch Based Image Retrieval (Final Year Project)",
    description: `
      <ul>
        <li><strong>Role:</strong> Leader </li>
        <li>Implemented <b> deep learning-based feature extraction </b> to analyze hand-drawn sketches and generate corresponding feature maps.</li>
        <li>Designed and developed an <b> image retrieval system</b>, mapping extracted features to relevant natural images for improved accuracy.</li>
        <li>Leveraged <b>convolutional neural networks (CNNs) </b> to identify key patterns in sketches, enabling precise retrieval.</li>
        <li>Optimized feature extraction algorithms to enhance <b> computational efficiency and retrieval performance</b>.</li>
      </ul>
      <p><b>Technologies:</b> Flask, Angular, Caffe, CNNs, Deep learning</p>
    `
  },
};

function showModal(projectKey) {
      document.getElementById('modal-title').innerText = projects[projectKey].title;
      document.getElementById('modal-description').innerHTML = projects[projectKey].description; // Fix applied
      document.getElementById('modal').style.display = "flex";
      document.body.classList.add('no-scroll');
    }

    function closeModal() {
      document.getElementById('modal').style.display = "none";
      document.body.classList.add('no-scroll');
    }

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("my-form");

    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      
      // Show loading message
      status.style.display = "block";
      status.className = ""; // Reset classes
      status.innerHTML = "Sending...";
      
      try {
        let response = await fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          status.innerHTML = "✅ Thank you for your submission!";
          status.className = "success-message";
          form.reset();
          setTimeout(() => status.style.display = "none", 4000); // Hide after 4 seconds
        } else {
          let result = await response.json();
          status.innerHTML = result.errors ? result.errors.map(error => error.message).join(", ") : "❌ Oops! There was a problem submitting your form.";
          status.className = "error-message";
        }
      } catch (error) {
        status.innerHTML = "❌ Oops! Something went wrong. Please try again.";
        status.className = "error-message";
      }
    }

    form.addEventListener("submit", handleSubmit);
  });