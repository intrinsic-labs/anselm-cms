// Initial data population script for The Anselm School
// Run this after setting up the CMS to populate with initial content

/* eslint-disable */
const initialData = {
  // Purpose Section Content
  purposeContent: [
    {
      _type: 'block',
      _key: 'purpose1',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'The Anselm School exists to teach students to love the true, do the good, and see the beautiful. These transcendentals are woven through a tapestry of literature, art, music, science, theology, history, and mathematics. Ultimately, these three virtues find their fulfillment in Christ. The Anselm School seeks to cultivate virtue and wisdom in the hearts and minds of the students—teaching them not ',
          marks: []
        },
        {
          _type: 'span',
          text: 'what',
          marks: ['em']
        },
        {
          _type: 'span',
          text: ' to think but ',
          marks: []
        },
        {
          _type: 'span',
          text: 'how',
          marks: ['em']
        },
        {
          _type: 'span',
          text: ' to think.',
          marks: []
        }
      ]
    }
  ],

  // Identity Distinctives
  distinctives: [
    {
      title: 'Biblically Rooted',
      slug: {current: 'biblically-rooted'},
      shortDescription: 'Founded upon historic Christianity with Scripture as our foundation',
      content: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'First and foremost, The Anselm School is founded upon historic Christianity. We believe that the Scriptures are to be the only rule for faith and practice. As the inspired and infallible word of God, the Bible is completely authoritative and governs all that we say and teach. True, we will teach theology and Bible to our students. We will study doctrine and seek to understand the depths of Scripture. But more than that, the daily life at Anselm will be centered around Scripture, prayer, and knowledge of God in all subjects.'
            }
          ]
        }
      ]
    },
    {
      title: 'Classically Focused',
      slug: {current: 'classically-focused'},
      shortDescription: 'Guiding students to joyfully encounter Truth through knowledge, wisdom, and virtue',
      content: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Classical education understands its task as guiding students to joyfully encounter Truth through the pursuit of knowledge, wisdom, and virtue. The end for which education exists is to make students critical thinkers, virtuous human beings, and those who love the true, good, and beautiful. If education was merely a transactional relationship between teachers and students in which there is a transfer of head knowledge and facts alone, artificial intelligence can fill this role. Rather, classical education is aimed at the heart and soul of a student, not only the head. We desire our students to be constant learners that will lead them to live the good life in light of Christ.'
            }
          ]
        }
      ]
    },
    {
      title: 'Academically Robust',
      slug: {current: 'academically-robust'},
      shortDescription: 'Academic firmness that is joyfully encountered',
      content: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'It is no secret that the academic nature of educational institutions has become more loose. Rightly so, this has caused many schools to swing in the opposite direction and focus solely on academic rigor. While the inclination to challenge the minds of students is a good thing, it can often come at the expense of joy. If students have lost the joy of learning from having too many homework assignments or intense lectures, we have failed at the task education seeks to accomplish: learning wisdom and virtue with joy. The Anselm School exists in the space of academic firmness that is joyfully encountered.'
            }
          ]
        }
      ]
    }
  ],

  // Board Members
  boardMembers: [
    {name: 'Ethan J. Greb', order: 1, boardType: 'board'},
    {name: 'Will Ross', order: 2, boardType: 'board'},
    {name: 'Brian McIntyre', order: 3, boardType: 'board'},
    {name: 'Will Reeves', order: 4, boardType: 'board'},
    {name: 'Alex Kiforishin', order: 5, boardType: 'board'}
  ],

  // Advisory Council
  advisoryMembers: [
    {
      name: 'Dr. Daniel Coupland',
      role: 'Dean, Graduate School of Classical Education',
      organization: 'Hillsdale College',
      order: 1,
      boardType: 'advisory'
    },
    {
      name: 'Rachel Greb',
      role: 'Humanities Department Chair & Teacher',
      organization: 'Veritas School, Richmond VA',
      order: 2,
      boardType: 'advisory'
    },
    {
      name: 'Soren Schwab',
      role: 'VP of Partnerships',
      organization: 'Classic Learning Test',
      order: 3,
      boardType: 'advisory'
    },
    {
      name: 'Robyn Burlew',
      role: 'Associate Head of School & Head of Upper School',
      organization: 'Veritas School, Richmond VA',
      order: 4,
      boardType: 'advisory'
    }
  ],

  // Quotes
  quotes: [
    {
      title: 'The Task of the Modern Educator',
      text: 'The task of the modern educator is not to cut down jungles but to irrigate deserts. The right defense against false sentiments is to inculcate just sentiments.',
      author: 'C.S. Lewis',
      source: 'The Abolition of Man',
      category: 'education',
      order: 1,
      featured: true
    },
    {
      title: 'Christian Education',
      text: 'A truly Christian education is possible only when Christian conviction underlies not a part but all of the curriculum of the school.',
      author: 'J. Gresham Machen',
      source: '',
      category: 'faith',
      order: 2,
      featured: true
    },
    {
      title: 'Knowledge of God and Self',
      text: 'Nearly all the wisdom we possess, that is to say, true and sound wisdom, consists of two parts: the knowledge of God and of ourselves.',
      author: 'John Calvin',
      source: 'Institutes of the Christian Religion',
      category: 'wisdom',
      order: 3,
      featured: false
    }
  ]
};

// Export for use in migration scripts
module.exports = initialData; 