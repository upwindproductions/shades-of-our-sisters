define(['servicesFactory'],

  function(servicesFactory) {
    servicesFactory.factory('ContentService', [
      function() {
        var _scope;

        var service = {
          /* ------------ LANDING PAGE --------------*/

          profile_left_name: 'Patricia',
          profile_left_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          profile_right_name: 'Sonya',
          profile_right_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          blurb: 'Shades of our Sisters aims to humanize Missing and Murdered Indigenous Women by collaborating with Indigenous community members to tell their story.',
          about_blurb: 'Shades of Our Sisters directly challenges the way in which the Canadian mainstream media is portraying our Missing and Murdered Indigenous Women by honouring who they were and how they lived, not how they died. Coinciding with the February Strawberry Ceremonies, Shades of Our Sisters will debut a live exhibition and two short documentaries that celebrate the spirit and memories of Sonya Cywink and Patricia Carpenter.',
          producers: [
            {
              'name': 'Max',
              'profile_pic': './resources/about/producers/max.jpg',
              'blurb': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
              'name': 'Alex',
              'profile_pic': './resources/about/producers/alex.jpg',
              'blurb': 'A brother, residing in Toronto and a graduate with a trouble-shooting degree whose primary efforts have been in the fields of social work, film/television and education (storytelling). With a wealth of experience, his values, perspective and understanding are closely aligned with those of his ancestors (pre-1492).'
            },
            {
              'name': 'Joyce',
              'profile_pic': './resources/about/producers/joyce.jpg',
              'blurb': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
              'twitter': 'http://twitter.com',
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
              'website': 'www.odiseaproductions.com',
              'email': 'melissa.gonzalez@ryerson.ca'
            },
            {
              'name': 'Adam Gualtieri',
              'role': 'Director of Photography',
              'sub_role': 'Assistant Editor',
              'profile_pic': './resources/about/team/adam.jpg',
              'website': 'www.adamgualtieri.com',
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
              'name': 'Antoinetta Emmanuel',
              'role': 'Director of Audio',
              'sub_role': ' ',
              'profile_pic': './resources/about/team/antonietta.jpg',
              'facebook': 'http://facebook.com',
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
              'image': './resources/about/credits/rta.png'
            }
          ],
          'credits_blurb': 'We’d like to thank you for supporting Shades of our Sisters.'
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
