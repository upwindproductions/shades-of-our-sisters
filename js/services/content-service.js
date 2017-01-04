// This file contains all the strings needed to populate the pages of the site
define(['servicesFactory'],

  function(servicesFactory) {
    servicesFactory.factory('ContentService', [
      function() {
        var _scope;

        var service = {
          /* ------------ LANDING PAGE --------------*/

          'profile_left_name': "Sonya's story",
          'profile_left_description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          'profile_right_name': "Patricia's story",
          'profile_right_description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          'blurb': ['How she lived, how she is loved and how much she is missed.',
                    'These are the Shades of Our Sisters.'],
          'about_blurb':['Named by the families of Sonya Cywink and Patricia Carpenter, Shades of Our Sisters originates from an old Ojibwe understanding. Within this teaching, Shades are said to be what is left  behind on this earth when a person’s spirit passes to the Land of their Ancestors.',
                      'Shades of Our Sisters is an Indigenous-student collaboration which aims to honour the lives of  Missing and Murdered Indigenous Women, Girls, Transgender and Two Spirit peoples by celebrating the love and memories which they have left with us. In an attempt to bring a compassionate approach to how these stories are told, the project focuses on how these women lived and how they are loved. The families of Sonya Cywink and Patricia Carpenter are the producers of the project and the Ryerson team is honoured to work with them to tell their stories.',
                      'Shades of Our Sisters is an installation which celebrates the spirit and memories of Sonya Cywink and Patricia Carpenter through artifacts from their lives, short documentary pieces and soundscapes. This project humanizes two of the 1,200+ MMIWGT2S in an extremely intimate manner, creating an education violence prevention experience which will last with those who attend. Our hope is that the stories of Sonya and Patricia will encourage young people to recognize how they can work to prevent violence from happening in their own lives and their communities at large.',
                      'We want those who attend to become an active part of reconciliation in ways that extend beyond the passive consumption of short form media. Our goal is to take an innovative approach at how students and Indigenous communities can collaborate to tell important stories through new media. The installation opens on Ryerson campus February 17th-19th and will travel to Alderville Community Centre on February 21st- 22nd and Espanola High School on February 24th- 25th.'],
          'producers': [
            {
              'name': 'Maggie Cywink',
              'profile_pic': './resources/about/producers/mag.jpg',
              'blurb': 'Maggie Cywink is a member of the Espanola High School and is currently residing in Virginia, USA. She owns a curatorial business which deals with private collectors across Canada and the United States. She also owns an event planning business focusing on First Nations. Since 1994, she has been advocating for the voices of MMIWGT2S People’s families. Her hope is that these families will find a way to heal.'
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
              'role': 'Financial Officer',
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
          'contact_blurb': 'This page will be updated with links and resources on how you can prevent violence in your communities, and promote a safe environment. In the meantime, if you have further questions, please feel free to contact us at ',
          'email': 'info@shadesofoursisters.com',
          'miigwetch': ' Miigwetch.',
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
          ]
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
