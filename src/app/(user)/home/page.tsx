import { About } from '@/components/User/Home/About';
import { ImageCarousel } from '@/components/User/Home/Casousel';
import { Contact } from '@/components/User/Home/Contact';
import { News } from '@/components/User/Home/News';
import { Services } from '@/components/User/Home/Services';
import { WhyUs } from '@/components/User/Home/WhyUs';
import React from 'react';

const page = () => {
	return (
		<div>
			<ImageCarousel />
			<About />
			<Services />
			<WhyUs />
			<News />
			<Contact />
		</div>
	);
};

export default page;
