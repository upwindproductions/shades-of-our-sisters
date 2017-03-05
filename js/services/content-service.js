// This file contains all the strings needed to populate the pages of the site
define(['servicesFactory'],

  function(servicesFactory) {
    servicesFactory.factory('ContentService', [
      function() {
        var _scope;

        var service = {
          'feather_logo': './resources/logos/feather.png',
          'profile_left_name': "Sonya's story",
          'profile_left_description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          'profile_right_name': "Patricia's story",
          'profile_right_description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          'blurb': ['How she lived, how she is loved and how much she is missed.',
                    'These are the Shades of Our Sisters.'],
          'about_blurb':['Named by the families of Sonya Cywink and Patricia Carpenter, Shades of Our Sisters originates from an old Ojibwe understanding. Within this teaching, Shades are said to be what is left  behind on this earth when a person’s spirit passes to the Land of their Ancestors.',
                      'Shades of Our Sisters is an Indigenous-student collaboration which aims to honour the lives of  Missing and Murdered Indigenous Women, Girls, Transgender and Two Spirit peoples by celebrating the love and memories which they have left with us. In an attempt to bring a compassionate approach to how these stories are told, the project focuses on how these women lived and how they are loved. The families of Sonya Cywink and Patricia Carpenter are the producers of the project and the Ryerson team is honoured to work with them to tell their stories.',
                      'Shades of Our Sisters is an exhibition which celebrates the spirit and memories of Sonya Cywink and Patricia Carpenter through artifacts from their lives, short documentary pieces and soundscapes. This project humanizes two of the 1,200+ MMIWGT2S in an extremely intimate manner, creating an education violence prevention experience which will last with those who attend. Our hope is that the stories of Sonya and Patricia will encourage young people to recognize how they can work to prevent violence from happening in their own lives and their communities at large.',
                      'We want those who attend to become an active part of reconciliation in ways that extend beyond the passive consumption of short form media. Our goal is to take an innovative approach at how students and Indigenous communities can collaborate to tell important stories through new media. The exhibition opens on Ryerson campus February 17th-19th and will travel to Alderville Community Centre on February 21st- 22nd and Espanola High School on February 24th- 25th.'],
          'producers': [
            {
              'name': 'Maggie Cywink',
              'profile_pic': './resources/about/producers/mag.jpg',
              'blurb': 'Maggie Cywink is a member of the Whitefish River First Nations and is currently residing in Virginia, USA. She owns a curatorial business which deals with private collectors across Canada and the United States. She also owns an event planning business focusing on First Nations. Since 1994, she has been advocating for the voices of MMIWGT2S People’s families. Her hope is that these families will find a way to heal.'
            },
            {
              'name': 'Alex Cywink',
              'profile_pic': './resources/about/producers/alex.jpg',
              'blurb': 'A brother, residing in Toronto and a graduate with a trouble-shooting degree whose primary efforts have been in the fields of social work, film/television and education (storytelling). With a wealth of experience, his values, perspective and understanding are closely aligned with those of his ancestors (pre-1492).'
            },
            {
              'name': 'Joyce Carpenter',
              'profile_pic': './resources/about/producers/joyce.jpg',
              'blurb': 'Joyce spent many years working in Indian and Northern Affairs as well as volunteering at Native organizations like NWRC and Council Fire. Now retired, Joyce is currently involved in the Aboriginal community of Toronto, and has become a spokesperson for the MMIWGT2S. She has five sons and seven grandchildren, who she knows would absolutely love their Auntie Trish.'
            }
          ],
          'teammates': [
            {
              'name': 'Laura Heidenheim',
              'role': 'Executive Producer',
              'sub_role': ' ',
              'profile_pic': './resources/about/team/laura.png',
              'linkedin': 'https://ca.linkedin.com/in/laura-heidenheim-623726126',
              'twitter': 'https://twitter.com/lauraheidenheim',
              'email': 'laura.heidenheim@ryerson.ca'
            },
            {
              'name': 'Michael Rebellato',
              'role': 'Story Writer',
              'sub_role': 'Researcher',
              'profile_pic': './resources/about/team/mike.png',
              'linkedin': 'https://www.linkedin.com/in/michael-rebellato-36b69812a',
              'instagram': 'https://www.instagram.com/mikeymoro/',
              'email': 'michael.rebellato@ryerson.ca'
            },
            {
              'name': 'Josephine Tse',
              'role': 'Project Manager',
              'sub_role': 'Digital Director',
              'profile_pic': './resources/about/team/josephine.png',
              'website': 'http://www.josephinetse.ca',
              'linkedin': 'https://www.linkedin.com/in/josephinetse95',
              'email': 'josephine.tse@ryerson.ca '
            },
            {
              'name': 'Melissa Gonzalez',
              'role': 'Editor',
              'sub_role': 'Cinematographer',
              'profile_pic': './resources/about/team/mel.png',
              'instagram': 'https://www.instagram.com/odiseaproductions/',
              'website': 'http://www.odiseaproductions.com',
              'email': 'melissa.gonzalez@ryerson.ca'
            },
            {
              'name': 'Adam Gualtieri',
              'role': 'Director of Photography',
              'sub_role': 'Assistant Editor',
              'profile_pic': './resources/about/team/adam.png',
              'website': 'http://www.adamgualtieri.com',
              'instagram': 'https://www.instagram.com/adamgualtieri/ ',
              'email': 'adam.gualtieri@ryerson.ca'
            },
            {
              'name': 'Tomas Maturana',
              'role': 'Artistic Director',
              'sub_role': 'Curator',
              'profile_pic': './resources/about/team/tomas.png',
              'facebook': 'https://www.facebook.com/tomas.i.maturana?fref=ts',
              'linkedin': 'https://ca.linkedin.com/in/tomas-maturana-664b97a3',
              'email': 'tomas.maturana@ryerson.ca'
            },
            {
              'name': 'Joshua Howe',
              'role': 'Chief Financial Officer',
              'sub_role': 'Marketing Director',
              'profile_pic': './resources/about/team/josh.png',
              'instagram': 'https://www.instagram.com/joshuaahowe/',
              'twitter': 'https://twitter.com/joshhowe9',
              'email': 'Joshua.a.howe@ryerson.ca'
            },
            {
              'name': 'Antonietta Emmanuel',
              'role': 'Director of Audio',
              'sub_role': ' ',
              'profile_pic': './resources/about/team/antonietta.png',
              'linkedin': 'https://www.linkedin.com/in/antonietta-emmanuel-43997412a/ ',
              'instagram': 'https://www.instagram.com/antoniettajean/',
              'email': 'antonietta.emmanuel@ryerson.ca'
            }
          ],
          'sponsors': [
            {
              'image': './resources/about/credits/rcds.png'
            },
            {
              'image': './resources/about/credits/ryerson.png'
            },
            {
              'image': './resources/about/credits/rta.jpg'
            },
            {
              'image': './resources/about/credits/fcad.jpg'
            },
            {
              'image': './resources/about/credits/recode.png'
            },
            {
              'image': './resources/about/credits/SIF.png'
            }
          ],
          'credits_blurb': 'We’d like to thank you for supporting Shades of Our Sisters.',
          'next_blurb': '"There needs to be a sacred circle of healing. When the healing starts our family and community grows stronger. We have the answers, we just need to start listening."',
          'next_author_quote': 'Maggie Cywink',
          'blog': {
            'home': 'http://www.blog.shadesofoursisters.com',
            'participate': 'http://www.blog.shadesofoursisters.com/feathersforourwomen',
            'resources': 'http://www.blog.shadesofoursisters.com/resources',
            'journey': 'http://www.blog.shadesofoursisters.com/feathersforourwomen1'
          },
          'email': 'mailto:info@shadesofoursisters.com',
          'resources':[
            {
              'name': 'Assaulted Women’s Helpline',
              'numbers': ['1-866-863-0511 (toll free)',
                          'GTA: 416-863-0511',
                          'TTY 1-866-863-7868 (toll free)',
                          'TTY GTA 416-364-8762']
            },
            {
              'name': 'Ontario Network of Sexual Assault/Domestic Violence Treatment Centres',
              'site': 'www.satcontario.com',
              'url': 'https://satcontario.com'
            },
            {
              'name': "Native Women's Resource Centre",
              'numbers': ['191 Gerrard St E, Toronto, ON M5A 3E5',
                          'Phone: (416) 963-9963']
            },
            {
              'name': 'Aboriginal Legal Services Of Toronto',
              'numbers': ['211 Yonge St, Toronto, ON M5B 1M4',
                          'Phone: (416) 408-3967']
            },
            {
              'name': 'Centre For Addiction and Mental Health (CAMH)',
              'numbers': ['416-535-8501 ext. 32437']
            },
            {
              'name': "Anduhyaun Native Women's Shelter",
              'numbers': ['Address: 1296 Weston Rd, York, ON M6M 4R3',
                          'Phone: (416) 243-7669']
            },
            /*{
              'name': 'Kids Help Phone',
              'numbers': ['1-800-668-6868']
            }*/
          ],
          'exhibition_blurb': 'The Shades of Our Sisters multimedia exhibition premiered on Friday, February 17th at the Tecumseh Auditorium in Toronto, Ontario. In the span of a week, the exhibition also traveled to the Alderville Community Centre in Alderville, Ontario and Espanola High School in Espanola, Ontario. Check out the behind-the-scenes and re-cap below.',
          'exhibition_images': {
            'patricia1': "./resources/exhibition/patricia1.png",
            'patricia2': "./resources/exhibition/patricia2.png",
            'sonya1': "./resources/exhibition/sonya1.png",
            'sonya2': "./resources/exhibition/sonya2.png"
          },
          'exhibition_slideshow_imgs': [
            './resources/exhibition/slide1.jpg',
            './resources/exhibition/slide2.jpg',
            './resources/exhibition/slide3.jpg',
            './resources/exhibition/slide4.jpg',
            './resources/exhibition/slide5.jpg',
            './resources/exhibition/slide6.jpg'
          ],
          'exhibition_blurb1': "The Shades of Our Sisters Exhibit invites audiences into the lives of Sonya Cywink and Patricia Carpenter.",
          'exhibition_blurb2': "Short documentaries, soundscapes and personal artifacts tell a story of who these women were and what the loss of their life means to those who love them.",
          'exhibition_blurb3': '"It was like she went from 13-30."',
          'exhibition_blurb4': "This is the transformation Patricia's mother saw in her when she became pregnant at the age of 13. Patricia had always taken care of her brothers and now she was facing the challenge of a lifetime - raising a child of her own. This strong, bold and maternal young woman was proud to be a mother and ready to give her son everything she could. In the six short weeks she spent with him, she did just that.",
          'exhibition_blurb5': "It's a cold winter's night and a group of young children move through the streets of Birch Island, huddled together as they approach a house. Their fearless leader walks up to the door and knocks, only to step back and nudge them forward.",
          'exhibition_blurb6': '"Long before empowerment was a word, she instilled that upon us"',
          'exhibition_blurb7': "says Teresa Jacko. 'She empowered us to go around the reserve and sing Christmas carols in cold weather.' Sonya left a mark on every person she met. She was a leader whose future had so much promise.",
          'exhibition_schedule':[
            {
              'city': 'Toronto',
              'location': 'Tecumseh Auditorium',
              'dates': [
                'Fri. February 17th 4:00 pm - 9:00 pm',
                'Opening Ceremonies at 6:30 pm',
                'Sat. February 18th - Sun. February 19th 11:00 pm - 5:00 pm'
              ]
            },
            {
              'city': 'Alderville',
              'location': 'Alderville Community Center',
              'dates': [
                'Tues. February 21st 6:30 pm - 9:00 pm',
                'Wed. February 22nd 9:00 am - 8:00 pm'
              ]
            },
            {
              'city': 'Espanola',
              'location': 'Espanola Secondary School',
              'dates': [
                'Fri. February 24th 6:30 pm - 9:00 pm',
                'Sat. February 25th 9:00 am - 8:00 pm'
              ]
            }
          ],
          'exhibition_links': {
            'toronto': 'https://www.facebook.com/events/174650976336400/',
            'alderville': 'https://www.facebook.com/events/284722955263145/',
            'espanola': 'https://www.facebook.com/events/1449271325098179/'
          },
          'thankyou_blurb': 'Thank you to these groups and organizations for taking part in and supporting the Shades of Our Sisters exhibition. Click on the images to visit their site and learn more.',
          'thankyou_companies': {
            'http://www.victimservicesontario.ca': './resources/exhibition/companies/victim_ontario.jpg',
            'http://victimservicestoronto.com/': './resources/exhibition/companies/victim_toronto.jpg',
            'http://trccmwar.ca/': './resources/exhibition/companies/TRCCM.jpg',
            'http://www.nativechild.org/': './resources/exhibition/companies/native.jpg',
            'https://torontodistresscentre.com/': './resources/exhibition/companies/survivor.jpg',
            'https://www.facebook.com/ryersonuofmosaic/': './resources/exhibition/companies/mosaic.png',
            'http://www.teanbannock.ca/': './resources/exhibition/companies/tea.jpeg',
            'https://www.facebook.com/pg/CafePowWow/photos/?ref=page_internal': './resources/exhibition/companies/pow.jpg',
            'http://moosehidecampaign.ca/': './resources/exhibition/companies/moose.jpg'
          },
          'full_album_link': 'https://www.facebook.com/pg/shadesofoursisters/photos/?tab=album&album_id=1677530575872725'
        };

        service.init = function(scope) {
          _scope = scope;

          // Add the key-value pairs to render HTML content
          for (var key in service) {
            _scope[key] = service[key];
          }

          return service;
        };

        return service;
      }]);
  });
