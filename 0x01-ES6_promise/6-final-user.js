import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signupPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  return Promise.allSettled([signupPromise, uploadPromise]).then((results) => results.map((res) => {
    if (res.status === 'fulfilled') {
      return { status: res.status, value: res.value };
    }

    return { status: res.status, value: res.reason };
  }));
}
