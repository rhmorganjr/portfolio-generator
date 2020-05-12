const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = profileDataArr => {
  console.log('================');

  profileDataArr.forEach(function(profileItem) {
    console.log(profileItem);
  });
};

printProfileData(profileDataArgs);