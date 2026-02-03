<script lang="ts">
	import BoardStaffTabs, { type Person } from '$lib/BoardStaffTabs.svelte';

	const leadershipMembers: Person[] = [
		{
			name: 'Jana Eagle',
			role: 'President',
			bio: [
				'Jana Eagle has dedicated more than 30 years of service to the Lemhi County Court system. In 2007, she was a key member of the team that established the Lemhi County Drug Court, and she has served as the Drug Court Coordinator since its inception.',

				'Through her work with Drug Court, Jana has seen firsthand how recovery transforms lives. She has witnessed individuals heal from addiction, reunite with their families, break cycles of criminal behavior, achieve personal goals, and build meaningful, connected lives. Supporting recovery-focused systems has been deeply fulfilling for her, and she is passionate about helping people succeed.',

				'Jana is excited to support the River of No Return Recovery Center and believes it will provide a vital space where individuals in recovery can connect, heal, and find a sense of community.',

				'Outside of her professional role, Jana’s favorite place to be is in her garden with her grandchildren, watching the chickens scratch and peck through the day. Her second favorite place is gathered around the dinner table with her family, sharing a home-cooked meal made with love.'
			]
		},
		{
			name: 'Annie Stokes',
			role: 'Vice President',
			bio: [
				'Annie Stokes is a Licensed Master Social Worker and serves as the Executive Director of Lemhi Valley Social Services. She began her career in the criminal justice system as a probation officer, where she gained firsthand experience working with individuals impacted by substance use, mental health challenges, and system involvement. Driven by a passion to better support individuals and families, Annie transitioned into social work and has spent the past 19 years working in the mental health and substance use treatment field.',

				'Throughout her career, Annie has witnessed both the devastating impacts of addiction and the profound, life-changing power of recovery. She believes strongly in the importance of accessible, community-based recovery support and views the River of No Return Recovery Center as a vital beacon of hope for individuals and families seeking lasting recovery. She is honored to serve as Vice President and to support the Center’s mission and growth.',

				'Outside of her professional work, Annie enjoys ranching with her family, cheering on her children as they participate in rodeo and sports, traveling, and embracing every opportunity for adventure.'
			]
		},
		{
			name: 'Maureen Barton',
			role: 'Secretary',
			bio: [
				'Maureen Barton has been a resident of Salmon and  married for 18 years. She is the proud mother of one daughter. Maureen holds a degree in Psychology and spent many years working in Real Estate Finance before relocating to Salmon.',

				'After her daughter reached school age, Maureen worked as a reading teacher at Upper Carmen Charter School. She is now retired and focuses on her most valued roles as a wife and mother.',

				'Maureen has been in recovery since 2007 and brings valuable lived experience to her role as Secretary of the Board. She understands firsthand the challenges of maintaining recovery without support and strongly believes in the importance of accessible, community-based recovery services. She sees the River of No Return Recovery Center as a vital resource and safe haven for individuals in recovery, particularly those who are often overlooked or underserved.'
			]
		}
	];

	const boardMembers: Person[] = [
		{
			name: 'Debbie Bielby',
			role: 'Board Member',
			bio: [
				'Debbie Bielby has worked in the Lemhi County Jail and Dispatch for the past 18 years and has spent most of her life in Salmon. Through her work in the criminal justice system, she has gained valuable insight into the challenges faced by individuals and families impacted by substance use and mental health concerns.',

				'Debbie is deeply committed to giving back to her community and believes strongly in supporting those in need. She is proud to be involved with the River of No Return Recovery Center and sees it as an important opportunity to help individuals access support, build stability, and move forward in recovery.'
			]
		},
		{
			name: 'Adam Earl',
			role: 'Board Member',
			bio: [
				'Adam Earl has lived in Salmon for the past 16 years and is a general contractor and local business owner. He has been in recovery for over eight years and brings valuable lived experience to his role with the River of No Return Recovery Center.',

				'Adam is passionate about supporting recovery in his community and believes strongly in the importance of peer connection, stability, and opportunity in long-term recovery. He is proud to support the mission of the River of No Return Recovery Center and its work to strengthen individuals and families in Lemhi County.'
			]
		},
		{
			name: 'Mathew Durbrow',
			role: 'Board Member',
			bio: [
				'Mathew Durbrow has lived in Salmon for the past seven years and has been in recovery for over six years. He is a general contractor, husband, and father of three, and brings both professional experience and lived recovery insight to his role with the River of No Return Recovery Center.',

				'Mathew is passionate about giving back to the community and supporting others who are struggling with addiction. He believes the River of No Return Recovery Center will have a positive and lasting impact on individuals and families throughout Lemhi County by providing connection, support, and hope for long-term recovery.'
			]
		},
		{
			name: 'John Bennet',
			role: 'Sheriff/Board Member',
			bio: [
				'John Bennet has served Lemhi County for over 21 years with the Sheriff’s Office and has dedicated 39 years as a volunteer with Salmon Search and Rescue, as well as 6 years with the Lemhi County Fire Protection District. For the past 15 years, he has served as the Sheriff’s Office narcotics investigator, gaining first hand insight into the devastating effects of substance use on individuals and the community.',

				'John joined the River of No Return Recovery Center to support its mission of providing hope, connection, and resources to those affected by addiction, in hopes to build a stronger community.',

				'Outside of his professional work, John enjoys outdoor recreation, hunting, fishing, and spending quality time with his family.'
			]
		},
		{
			name: 'Michele Aitken',
			role: 'Board Member',
			bio: [
				'Michele Aitken is a proud mother of four and serves as a board member for the River of No Return Recovery Center. She works for Lemhi County Probation and is deeply committed to helping individuals make positive, lasting changes in their lives.',

				'Michele is celebrating five years of sobriety in January and is a graduate of the Lemhi County Drug Court (Class of 2022), an experience she describes as life-changing. Her personal journey inspires her dedication to supporting others in recovery.',

				'Being part of the River of No Return Recovery Center allows Michele to give back to her community and share hope with individuals on their recovery journey.'
			]
		},
		{
			name: 'Don Mogensen',
			role: 'Board Member',
			bio: [
				'Don Mogensen has worked in the mental health field in Salmon for the past 15 years and has served as a Peer Support Specialist for approximately seven years. As someone in recovery himself, Don is a strong advocate for peer support and its transformative role in long-term recovery.',

				'He is dedicated to helping others on their recovery journeys and is proud to be part of the River of No Return Recovery Center, providing a safe, supportive, and resourceful environment for the community.'
			]
		}
	];

	const staffMembers: Person[] = [
		{
			name: 'Bruce Larson',
			role: 'Peer Support / Recovery Coach',
			bio: [
				'Bruce Larson is a Certified Peer Support Specialist and Recovery Coach. He graduated from the Lemhi County Felony Drug Court program in March 2023, an experience that inspired him to dedicate his life to helping others in his community overcome addiction.',

				'Bruce has been clean and sober for over three and a half years and is passionate about role-modeling recovery, supporting peers in reclaiming their lives, and helping individuals become the best version of themselves.',

				'Outside of his professional work, Bruce enjoys playing golf, video games, spending time with his family, and embracing a life of purpose and fulfillment.'
			]
		},
		{
			name: 'Lindsi Smith',
			role: 'Peer Support / Recovery Coach',
			bio: [
				'Lindsi Smith has been clean and sober since June 1, 2022, and is a graduate of the Bonneville County Felony Drug Court program. She became a Peer Support Specialist and Recovery Coach to share her story and provide guidance, support, and hope to individuals navigating addiction and mental health challenges.',

				'Lindsi is passionate about helping others on their recovery journeys and believes strongly in the power of peer connection. Outside of work, she enjoys spending time outdoors fishing, hiking, and camping, and most of all, cherishes every moment with her children.'
			]
		},
		{
			name: 'Kim Sheppard, CADC',
			role: 'Peer Support / Recovery Coach',
			bio: [
				'Kim Sheppard is a Certified Alcohol and Drug Counselor with nearly two decades of experience supporting individuals with substance use disorders. Kim is certified by the American Lung Association as a tobacco and nicotine cessation coach.',

				'Kim has been with Lemhi Valley Social Services for the past ten years and is deeply committed to supporting clients in their recovery journey. She focuses on meeting individuals where they are, providing a safe and nonjudgmental space, and fostering lasting change. Kim is passionate about prevention, recovery, and helping others create fulfilling, healthy lives.'
			]
		}
	];
</script>

<svelte:head>
	<title>About · River of No Return Recovery</title>
</svelte:head>

<main class="mx-auto max-w-3xl space-y-8 px-6 py-8">
	<!-- ... your other about sections above ... -->

	<!-- Insert the tabs here -->
	<section class="mx-auto max-w-3xl px-6 py-8">
		<h2 class="sr-only">Leadership, Board & Staff</h2>
		<BoardStaffTabs {leadershipMembers} {boardMembers} {staffMembers} defaultValue="leadership" />
	</section>
</main>
