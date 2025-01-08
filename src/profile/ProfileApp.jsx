import { ProfileContext } from './ProfileContext';
import Profile from './Profile';
import ProfileAddress from './ProfileAddress';
import { useState } from 'react';
import ProfileForm from './ProfileForm';

export default function ProfileApp() {
	const [name, setName] = useState('asdas');

	return (
		<>
			<ProfileContext.Provider value={name}>
				<h1>Profile App with context</h1>
				<ProfileForm name={name} setName={setName} />
				<Profile />
				<ProfileAddress />
			</ProfileContext.Provider>
		</>
	);
}
