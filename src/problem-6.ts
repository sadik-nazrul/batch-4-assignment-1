interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (
  obj: Profile,
  updateProfileObj: Partial<Profile>
): Profile => {
  return { ...obj, ...updateProfileObj };
};
