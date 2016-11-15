define(['servicesFactory'],

  function(servicesFactory) {
    servicesFactory.factory('ContentService', [
      function() {
        var _scope;

        var service = {
          /* ------------ LANDING PAGE --------------*/

          profile_left_name: "View Sonya's story",
          profile_left_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          profile_right_name: "View Patricia's story",
          profile_right_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          blurb: 'It’s about honouring how they lived, not how they died.',
          about_blurb: 'Shades of Our Sisters directly challenges the way in which the Canadian mainstream media is portraying our Missing and Murdered Indigenous Women by focusing on how they lived, not how they died. Coinciding with the February Strawberry Ceremonies, Shades of Our Sisters will debut a live exhibition and two short documentaries that celebrate the spirit and memories of Sonya Cywink and Patricia Carpenter. The exhibition works to tell stories of Sonya and Patricia through artifacts from their lives, short documentary pieces and soundscapes. This project humanizes two of the 1,600+ MMIWGT2S in an extremely intimate manner, creating an education violence prevention experience which will last with those who attend. Our hope is that the stories of Sonya and Patricia will encourage young people to recognize how they can work to prevent violence from happening in their own lives and their communities at large.',
          producers: [
            {
              'name': 'Mag Cywink',
              'profile_pic': './resources/about/producers/mag.jpg',
              'blurb': 'Maggie Cywink, is a member of Whitefish River First Nation and resides in Virginia. Maggie has been advocating for the families of the MMIWGT2S People in Ontario since 1994. Her hope is that families will find a way to heal. She owns a curatorial business which leads her to work with private collections across the country. As a part of her endeavors, she owns a small event planning and marketing business focusing on First Nations which grown over the past few years.'
            },
            {
              'name': 'Alex Cywink',
              'profile_pic': './resources/about/producers/alex.jpg',
              'blurb': 'A brother, residing in Toronto and a graduate with a trouble-shooting degree whose primary efforts have been in the fields of social work, film/television and education (storytelling). With a wealth of experience, his values, perspective and understanding are closely aligned with those of his ancestors (pre-1492).'
            },
            {
              'name': 'Joyce Carpenter',
              'profile_pic': './resources/about/producers/joyce.jpg',
              'blurb': "Joyce Carpenter is the Mother of the Late Beautiful Patricia Carpenter. She has five sons; Derek, Patrick Jr., James, Dakota and Lukie Littleloon as well as being the proud grandmother of seven awesome grandchildren who she knows would absolutely love their Auntie Trish. Joyce is retired, after working many years at Indian and Northern Affairs, and Women's College Hospital here in Toronto. She left work for a bit to raise her small children, then went on to volunteer at Native organizations such as NWRC and Council Fire. Joyce is involved in the Aboriginal Community in Toronto, and has become a spokesperson for the MMIWG. Besides raising her own children, Joyce was always fortunate to have foster children in her care, many of whom still keep in touch."
            }
          ],
          teammates: [
            {
              'name': 'Laura Heidenheim',
              'role': 'Executive Producer',
              'sub_role': ' ',
              'profile_pic': './resources/about/team/laura.jpg',
              'linkedin': 'https://ca.linkedin.com/in/laura-heidenheim-623726126',
              'twitter': 'https://twitter.com/lauraheidenheim',
              'email': 'laura.heidenheim@ryerson.ca'
            },
            {
              'name': 'Michael Rebellato',
              'role': 'Story Coordinator',
              'sub_role': ' ',
              'profile_pic': './resources/about/team/mike.jpg',
              'linkedin': 'https://www.linkedin.com/in/michael-rebellato-36b69812a',
              'instagram': 'https://www.instagram.com/mikeymoro/',
              'email': 'michael.rebellato@ryerson.ca'
            },
            {
              'name': 'Josephine Tse',
              'role': 'Production Manager',
              'sub_role': 'Digital Director',
              'profile_pic': './resources/about/team/josephine.jpg',
              'website': 'http://www.josephinetse.ca',
              'linkedin': 'https://www.linkedin.com/in/josephinetse95',
              'email': 'josephine.tse@ryerson.ca '
            },
            {
              'name': 'Melissa Gonzalez',
              'role': 'Editor',
              'sub_role': 'Cinematographer',
              'profile_pic': './resources/about/team/mel.jpg',
              'instagram': 'https://www.instagram.com/odiseaproductions/',
              'website': 'http://www.odiseaproductions.com',
              'email': 'melissa.gonzalez@ryerson.ca'
            },
            {
              'name': 'Adam Gualtieri',
              'role': 'Director of Photography',
              'sub_role': 'Assistant Editor',
              'profile_pic': './resources/about/team/adam.jpg',
              'website': 'http://www.adamgualtieri.com',
              'instagram': 'https://www.instagram.com/adamgualtieri/ ',
              'email': 'adam.gualtieri@ryerson.ca'
            },
            {
              'name': 'Tomas Maturana',
              'role': 'Artistic Director',
              'sub_role': 'Curator',
              'profile_pic': './resources/about/team/tomas.jpg',
              'facebook': 'https://www.facebook.com/tomas.i.maturana?fref=ts',
              'linkedin': 'https://ca.linkedin.com/in/tomas-maturana-664b97a3',
              'email': 'tomas.maturana@ryerson.ca'
            },
            {
              'name': 'Joshua Howe',
              'role': 'Financial Officer',
              'sub_role': 'Marketing Director',
              'profile_pic': './resources/about/team/josh.jpg',
              'instagram': 'https://www.instagram.com/joshuaahowe/',
              'twitter': 'https://twitter.com/joshhowe9',
              'email': 'Joshua.a.howe@ryerson.ca'
            },
            {
              'name': 'Antonietta Emmanuel',
              'role': 'Director of Audio',
              'sub_role': ' ',
              'profile_pic': './resources/about/team/antonietta.jpg',
              'linkedin': 'https://www.linkedin.com/in/antonietta-emmanuel-43997412a/ ',
              'instagram': 'https://www.instagram.com/antoniettajean/',
              'email': 'antonietta.emmanuel@ryerson.ca'
            }
          ],
          sponsors: [
            {
              'image': './resources/about/credits/rcds.png'
            },
            {
              'image': './resources/about/credits/ryerson.png'
            },
            {
              'image': './resources/about/credits/rta_logo.png'
            }
          ],
          'credits_blurb': 'We’d like to thank you for supporting Shades of our Sisters.',
          'next_blurb': 'There needs to be a sacred circle of healing. When the healing starts our family and community grows stronger. We have the answers, we just need to start listening.',
          'next_author_quote': 'Maggie Cywink',
          'contact_blurb': 'This page will be updated with links and resources on how you can prevent violence in your communities, and promote a safe environment. In the meantime, if you have further questions, please feel free to contact us at ',
          'email': 'info@shadesofoursisters.com',
          'miigwetch': ' Miigwetch.'
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
