const exercises = [
  {
    name: "Running",
    activities: [
      {
        type: "Jogging (5 mph)",
        calories_per_hour: 472,
        instruction:
          "To jog at   5 mph, maintain a relaxed and consistent rhythm, allowing your feet to strike the ground at a comfortable pace. Aim for a pace where you feel like you could easily walk but are moving faster. Ensure that your knees lift slightly with each stride, and your arms swing naturally.",
      },
      {
        type: "Running (8 mph)",
        calories_per_hour: 944,
        instruction:
          "For running at   8 mph, focus on your running form, ensuring you are using an efficient stride and maintaining good posture. Gradually build up your speed, pushing through hills and uphills, and incorporate interval training to improve your endurance and speed. Achieving an   8-minute mile requires a significant amount of training and dedication, so it's essential to listen to your body and adjust your training accordingly.",
      },
      {
        type: "Sprinting (12 mph)",
        calories_per_hour: 1180,
        instruction:
          "To sprint at   12 mph, begin with a thorough warm-up, choose a suitable starting position, focus on accelerating smoothly and powerfully, maintain a strong and fluid running form, control your speed to prevent fatigue, and cool down afterward. Sprinting at this pace is high-intensity and requires extensive training and conditioning.",
      },
    ],
  },
  {
    name: "Cycling",
    activities: [
      {
        type: "Casual biking (10 mph)",
        calories_per_hour: 354,
        instruction:
          "To casually bike at   10 mph, wear tight-fitting clothes to reduce wind resistance, maintain an aerodynamic riding position, consider using aerodynamic components for your bike, and practice group rides to take advantage of slipstream riding.",
      },
      {
        type: "Moderate biking (14 mph)",
        calories_per_hour: 590,
        instruction:
          "For moderate biking at   14 mph, implement the same tips as for casual biking to reduce drag and maintain efficiency, incorporate interval rides to improve muscular fitness and power, use power or heart rate monitoring to keep your intensity consistent, and track your average speeds to measure improvement.",
      },
      {
        type: "Intense biking (20 mph)",
        calories_per_hour: 944,
        instruction:
          "Intense biking involves a combination of speed, efficiency, and power. Practice aerobic tucks on descents to save energy and use it for the climbs. Work on your route optimization to reduce the time spent on the bike and increase your average speed.",
      },
    ],
  },
  {
    name: "Swimming",
    activities: [
      {
        type: "Freestyle, vigorous effort",
        calories_per_hour: 590,
        instruction:
          "To swim freestyle with vigorous effort, move each arm in a smooth sweeping motion, pushing your arms up, out, and backward on the backsweep. Flutter kick with your toes pointed just under the surface of the water using a two-beat kick for long and middle distance swimming. Keep your forehead just under the water and rotate your body to the surface to breathe through your mouth.",
      },
      {
        type: "Breaststroke, moderate effort",
        calories_per_hour: 472,
        instruction:
          'To swim breaststroke with moderate effort, start with your arms fully extended in front of your body with your palms pointing down and fingertips pointing forward. Drive your arms forward and fully extend your arms straight in front of your body. Turn your palms slightly outward and sweep your arms out to your sides until they form a "Y" shape with your body. Bend your elbows and move your forearms down and back as you pull your hands together in front of your chest. Lift your head out of the water to take a breath. Extend your arms forward just below the surface to enter the glide phase, and begin the cycle again. Keep your heels up towards your bottom without popping out of the water, focus on your thigh not dropping under you, and imagine holding a tennis ball between your chin and chest for a streamlined approach.',
      },
      {
        type: "Butterfly, vigorous effort",
        calories_per_hour: 708,
        instruction:
          "To swim butterfly with vigorous effort, approach the wall for the spin with your hands below, on, or above the water simultaneously. Extend one hand rearward back slightly and spin your body on its side by pushing your hips and tucking your knees. Straighten your legs strongly to transmit velocity away from the pool’s edge. Begin a dolphin leg kicking underwater as your speed slows, maintaining the arms in front of you to begin the propulsive phase. Arm recovery should be vigorous, extending them out next to you to re-enter the water. Kick twice every arm cycle to drive the arms out of the water for recuperation and propel them back into the water. Breathing patterns can vary, but a common pattern is to breathe to the front with your shoulders leading the head above the water. Inhale rapidly through your mouth, drop your head before exhaling fast through the mouth and nose beneath the water, and re-enter the water with your head first, then your arms.",
      },
    ],
  },
  {
    name: "Walking",
    activities: [
      {
        type: "Brisk walking (4 mph)",
        calories_per_hour: 236,
        instruction:
          "To brisk walk at   4 mph, keep your head up and eyes ahead. Relax your neck and shoulders, maintain a straight back, and engage your core. Roll your foot from heel to toe with a steady gait, and loosely swing your arms. Gradually increase your speed and include hills in your walks to challenge yourself further.",
      },
      {
        type: "Power walking (5 mph)",
        calories_per_hour: 354,
        instruction:
          "To power walk at   5 mph, focus on maintaining a consistent rhythm and intensity. Bend your elbows to  90 degrees and swing your arms forward, keeping them close to your sides. Maintain good posture with your head up, shoulders back, and abs pulled in tight. Keep your legs and feet working hard with short, controlled strides, rolling your foot from heel to toe. Remember to wear comfortable clothing and safety equipment like reflective gear and sunscreen when walking outside [0](https://www.verywellfit.com/power-walking-definition-techniques-and-benefits-5410275)[1](https://marathonhandbook.com/power-walking/).",
      },
      {
        type: "Race walking (6 mph)",
        calories_per_hour: 472,
        instruction:
          "To race walk at   6 mph, adhere strictly to proper technique. One foot must remain in contact with the ground at all times, and the leading leg must remain straight until the body passes over it. Notice the rolling hip movement and keep your arms low, rising only to the level of the belly button or just above. Take shorter and quicker steps to achieve the required speed. This style of walking requires regular training and is often practiced as a competitive sport [2](https://www.wikihow.fitness/Race-Walk)[3](https://blog.myfitnesspal.com/brisk-power-and-race-walking-styles-ranked-by-speed/).",
      },
    ],
  },
  {
    name: "Strength Training",
    activities: [
      {
        type: "Weightlifting, vigorous effort",
        calories_per_hour: 354,
        instruction:
          "To weightlift with vigorous effort, start with a weight that you can lift for  8 to  12 reps. Choose weights that are challenging but allow you to complete the desired number of repetitions with proper form. Focus on compound exercises that work multiple muscle groups at once, such as squats, deadlifts, and bench presses. Always use proper form to prevent injuries and maximize effectiveness.",
      },
      {
        type: "Circuit training, including weights",
        calories_per_hour: 472,
        instruction:
          "For circuit training including weights, perform a series of exercises in rapid succession without stopping. Each exercise should be performed for a set number of reps, and then move on to the next exercise without resting. Examples of exercises include dumbbell twist lunges, lunges, and marching bridges. Make sure to progressively overload the weights as you get stronger to continue challenging your muscles ",
      },
      {
        type: "High-intensity interval training (HIIT)",
        calories_per_hour: 590,
        instruction:
          "High-Intensity Interval Training (HIIT) involves alternating between periods of intense exercise and short rest periods. To perform HIIT, you should aim to raise your heart rate above  80% of its maximum. Here's a simple example of a HIIT workout for beginners:\n\n1.  30 seconds of side lunges, alternating right to left\n2.  15 seconds of slow marches in place\n3.  30 seconds of squats (jump squats for higher intensity)\n4.  15 seconds of slow marches in place\n5.  30 seconds of push-ups on the floor\n6.  15 seconds of slow marches in place\n7.  30 seconds of jumping jacks\n8.  15 seconds of slow marches in place\n9.  30 seconds of triceps dips using a sturdy chair or bed\n10.  15 seconds of slow marches in place\n11.  30 seconds of alternating high knees (jogging high knees for higher intensity)\n12.  15 seconds of slow marches in place\n13.  30 seconds of sit-ups (on a stability ball or abdominal crunches on the floor)\n\nRemember to warm up properly before beginning and cool down afterwards. HIIT is a great way to get a full-body workout in a short amount of time. However, it's important to listen to your body and consult with a healthcare provider before starting any new exercise regimen, especially if you have any pre-existing health conditions.",
      },
    ],
  },
  {
    name: "Group Classes",
    activities: [
      {
        type: "Zumba",
        calories_per_hour: 472,
        instruction:
          "To participate in a Zumba class, arrive early to introduce yourself to the instructor and get a feel for the space. Dress in comfortable, non-restrictive clothing that allows for free movement. Follow the instructor's lead and copy the moves, focusing on maintaining a good posture and having fun. Remember to listen to the music and try to match your movements to the beat.",
      },
      {
        type: "Spin class",
        calories_per_hour: 590,
        instruction:
          "Attending a Spin class involves several steps: arrive early to get a bike setup, wear appropriate clothing such as tank tops, tights, and shorts, and bring a water bottle and towel to stay hydrated and wipe off sweat. Pay attention to the instructor's cues and follow the class structure, which usually includes intervals of intense exercise followed by short rest periods. Be mindful of your form and pedaling technique to avoid injury. If you're new, let the instructor know, and they'll guide you through the process.",
      },
      {
        type: "CrossFit",
        calories_per_hour: 708,
        instruction:
          "Participating in a CrossFit class typically involves a dynamic warm-up, skill/strength work, and a workout of the day (WOD). It's important to arrive early for the introduction class to familiarize yourself with the nine foundational movements of CrossFit and proper form. If you're new to CrossFit, you may be required to complete the On Ramp/Elements course, which teaches you these fundamental movements. During the regular classes, expect a mix of strength and cardio exercises, with a strong emphasis on proper form and scalability based on your skill level. Listen to the instructor's guidance, and remember to push yourself, but also to prioritize safety and listen to your body.",
      },
    ],
  },
  {
    name: "Sports",
    activities: [
      {
        type: "Basketball (competitive)",
        calories_per_hour: 590,
        instruction:
          "Develop a strong understanding of the game's fundamentals, learn to handle the ball properly, master the art of passing, practice shooting techniques, and focus on teamwork and coordination. Good players pass rather than trying to dominate the game themselves.",
      },
      {
        type: "Soccer (competitive)",
        calories_per_hour: 708,
        instruction:
          "Learn the basic rules, objectives, and strategies of the game. Participate in pickup games and matches to improve your skills and understand the dynamics of the sport. Learn to control the ball effectively with different parts of your foot, change the ball's angle, arc, and direction. Understand the importance of defense, particularly closing off space around the ball to prevent the opposing team from advancing or scoring. Work on playing a clean game, prioritizing fair play and avoiding injuries. Join a team or league to compete and improve against others.",
      },
      {
        type: "Tennis (singles)",
        calories_per_hour: 472,
        instruction:
          "Analyze your opponent's game to understand their strengths and weaknesses, and adapt your strategy accordingly. Develop a game plan based on your opponent's tendencies, focusing on your strengths and exploiting their weaknesses. Practice and refine your game plan regularly to become more comfortable with your chosen tactics and shots. During the match, be prepared to adjust your strategy based on your opponent's playing style and reactions. Stay mentally focused, aware of the score, and maintain a positive attitude throughout the match. Utilize net play strategies effectively, such as volleys, overheads, and drop shots, to put pressure on your opponent and create winning opportunities.",
      },
    ],
  },
  {
    name: "Yoga",
    activities: [
      {
        type: "Hatha Yoga",
        calories_per_hour: 236,
        instruction:
          "Hatha Yoga is a gentle form of yoga that focuses on the basics. Begin with warm-up poses like Cat/Cow and Child’s Pose to prepare your body. Practice poses such as Bridge Pose with modifications if needed, and hold each pose for around  5 breaths. End with meditation to connect with your breath and relax your body.",
      },
      {
        type: "Vinyasa Yoga",
        calories_per_hour: 354,
        instruction:
          "Vinyasa Yoga is a dynamic style of yoga that flows from one pose to the next. Start with a plank position and lengthen forward through the crown of your head and out through your heels. Progress through a sequence of poses, connecting the movements with your breath. Warm up with poses like Neck Stretches, Gentle Twist, and Child’s Pose. Study the sequencing of Vinyasa yoga poses to enhance your practice, and consider online resources and short courses to learn the structure.",
      },
      {
        type: "Power Yoga",
        calories_per_hour: 472,
        instruction:
          "Power Yoga is a vibrant and dynamic style of yoga that combines strength, flexibility, and breath control. Start with a warm-up, such as Cat-Cow with blocks, to prepare your body. Transition into poses like Low Lunge with blocks, Plank Pose variation with blocks, Extended Side Angle, Revolved Triangle, and Standing Splits. Follow these with Camel Pose and Head-to-Knee Pose for a cool down. Throughout your practice, maintain a strong connection with your breath and focus on the alignment of your body. Consider incorporating props like blocks to assist with certain poses and to challenge your balance and stability.",
      },
    ],
  },
  {
    name: "Pilates",
    activities: [
      {
        type: "Mat Pilates",
        calories_per_hour: 236,
        instruction:
          "Mat Pilates begins with a focus on form, breathwork, and controlled purposeful movement. Begin slowly and steadily, focusing on engaging your deep core muscles. Use your breath, especially the exhale, to deepen core activation. Work in all body position variations: standing, seated, on all fours, lying on your back, and lying on your front. Be patient and persistent as you teach your body a new way of movement. Take at least two sessions per week initially, increasing frequency as you progress.",
      },
      {
        type: "Reformer Pilates",
        calories_per_hour: 354,
        instruction:
          "Reformer Pilates involves footwork in a neutral spine with engaged abs. For exercises like Pilates V, the lift of the heels helps engage the inner thigh and pelvic floor. Practice exercises like Leg Circles and Running on the Reformer, making sure to go for length and engage the entire leg, not just the quads. Pay attention to the articulation of your feet, emphasizing the lift of the heel and the energy from the back of the leg.",
      },
      {
        type: "Barre Pilates",
        calories_per_hour: 472,
        instruction:
          "Barre Pilates is a low-impact form of Pilates that involves using a barre to assist with balance and leverage during exercises. Start with a warm-up on the floor, such as a cat-cow sequence. Move onto the barre, holding it with both hands and placing your feet on the ground or the barre itself, depending on the position. Perform exercises like pliés, relevés, and piqué turns, focusing on maintaining a straight line from your knees to your toes. Practice controlled movements with your core engaged, and pay attention to your form and breath. Finish with a cool-down sequence on the floor to stretch and relax your muscles [0](https://www.litmethod.com/blogs/boltcut-blog/pilates-bar-workout)[1](https://www.womenshealthmag.com/uk/fitness/a43890777/3-2-8-barre-pilates-method/).",
      },
    ],
  },
  {
    name: "Dancing",
    activities: [
      {
        type: "Ballet",
        calories_per_hour: 354,
        instruction:
          "Ballet is a classical dance form that requires precision, grace, and strength. Practice basic steps such as the plié, tendu, and extension, and work on your turnout and elevation. Use a mirror to check your alignment and ensure that your movements are fluid and controlled. Remember to warm up before dancing and cool down afterwards to prevent injuries.",
      },
      {
        type: "Hip Hop",
        calories_per_hour: 472,
        instruction:
          "Hip Hop dance is known for its energetic and expressive movements. Start with basic steps like the basic step, pop lock, and breakdancing moves. Practice isolations and combinations to develop your own unique style. Use a mirror to correct your posture and timing, and always listen to the music to enhance your performance. Remember to stay hydrated and warm up properly before dancing.",
      },
      {
        type: "Salsa",
        calories_per_hour: 590,
        instruction:
          "Salsa is a lively partner dance that originated in the Caribbean. Learn the basic steps such as the basic step, side step, and turn. Practice the salsa box step and the salsa turn to improve your agility and coordination. Use a mirror to check your timing and ensure that your movements are smooth and connected. Remember to warm up before dancing and cool down afterwards to prevent injuries.",
      },
    ],
  },
];

export default exercises;
