Ext.define("MyApp.store.Stations", {
	extend: "Ext.data.TreeStore",
	config: {
		fields: ["text", "channel", "name"],
		root: {
			text: "Sirius XM Channel List",
			children: [
				{
					text: "Pop",
					children: [
						{
							channel: 2,
							text: "Top 40 Hits",
							name: "Sirius XM Hits 1"
						},
						{
							channel: 3,
							text: "Pop Music Discovery",
							name: "Top 20 on 20"
						},
						{
							channel: 4,
							text: "’40s Pop Hits/Big Band",
							name: "’40s on 4"
						},
						{
							channel: 5,
							text: "’50s Pop Hits",
							name: "’50s on 5"
						},
						{
							channel: 6,
							text: "’60s Pop Hits",
							name: "’60s on 6"
						},
						{
							channel: 7,
							text: "70s Pop Hits",
							name: "’70s on 7"
						},
						{
							channel: 8,
							text: "’80s Pop Hits",
							name: "’80s on 8"
						},
						{
							channel: 9,
							text: "’90s Pop Hits",
							name: "’90s on 9"
						},
						{
							channel: 10,
							text: "2000s and Today",
							name: "The Pulse"
						},
						{
							channel: 14,
							text: "2000s Pop Hits",
							name: "Pop 2K"
						},
						{
							channel: 15,
							text: "Studio 54 Radio",
							name: "Studio 54 Radio"
						},
						{
							channel: 16,
							text: "Lite Pop Hits",
							name: "The Blend"
						},
						{
							channel: 17,
							text: "Love Songs",
							name: "Sirius XM Love"
						}
					]
				},
				{
					text: "Rock",
					children: [
						{
							channel: 19,
							name: "Elvis Radio",
							text: "Elvis 24/7 Live from Graceland"
						},
						{
							channel: 20,
							name: "E Street Radio",
							text: "Bruce Springsteen 24/7"
						},
						{
							channel: 21,
							name: "Underground Garage",
							text: "Little Steven’s Underground Garage"
						},
						{
							channel: 22,
							name: "Pearl Jam Radio",
							text: "Pearl Jam 24/7"
						},
						{
							channel: 23,
							name: "Grateful Dead Radio",
							text: "Grateful Dead 24/7"
						},
						{
							channel: 24,
							name: "Radio Margaritaville",
							text: "Escape to Margaritaville"
						},
						{
							channel: 25,
							name: "Classic Rewind",
							text: "’70s & ’80s Classic Rock"
						},
						{
							channel: 26,
							name: "Classic Vinyl",
							text: "’60s & ’70s Classic Rock"
						},
						{
							channel: 27,
							name: "Deep Tracks",
							text: "Deep Classic Rock"
						},
						{
							channel: 28,
							name: "The Spectrum",
							text: "Adult Album Rock"
						},
						{
							channel: 29,
							text: "Jam Bands",
							name: "Jam On"
						},
						{
							channel: 30,
							text: "Contemporary Eclectic",
							name: "The Loft"
						},
						{
							channel: 31,
							text: "Acoustic Singer-Songwriters",
							name: "The Coffeehouse"
						},
						{
							channel: 32,
							text: "Mellow Rock",
							name: "The Bridge"
						},
						{
							channel: 33,
							text: "Classic Alternative",
							name: "1st Wave"
						},
						{
							channel: 34,
							text: "’90s Alternative/Grunge",
							name: "Lithium"
						},
						{
							channel: 35,
							text: "Indie Rock",
							name: "Sirius XMU"
						},
						{
							channel: 36,
							text: "New Alternative Rock",
							name: "Alt Nation"
						},
						{
							channel: 37,
							text: "New Hard Rock",
							name: "Octane"
						},
						{
							channel: 38,
							text: "Classic Hard Rock Presented by Ozzy",
							name: "Ozzy's Boneyard"
						},
						{
							channel: 39,
							text: "’80s Hair Bands",
							name: "Hair Nation"
						},
						{
							channel: 40,
							text: "Heavy Metal",
							name: "Liquid Metal"
						},
						{
							channel: 41,
							text: "Music of Action Sports",
							name: "The Faction"
						},
						{
							channel: 42,
							text: "Reggae",
							name: "The Joint"
						}
					]
				},
				{
					text: "Hip Hop/R&B",
					children: [
						{
							channel: 44,
							text: "Hip-Hop Hits",
							name: "HiPHoP Nation"
						},
						{
							channel: 45,
							text: "Eminem's Uncut Hip-Hop Channel",
							name: "Shade 45"
						},
						{
							channel: 46,
							name: "Backspin",
							text: "Old Skool Rap"
						},
						{
							channel: 47,
							name: "The Heat",
							text: "The Hottest R&B Hits"
						},
						{
							channel: 48,
							name: "Heart & Soul",
							text: "Adult R&B Hits"
						},
						{
							channel: 49,
							name: "Soultown",
							text: "Classic Soul/Motown"
						},
						{
							channel: 50,
							name: "The Groove",
							text: "Old Skool R&B"
						}
					]
				},
				{
					text: "Dance/Electronic",
					children: [
						{
							name: "bpm",
							text: "Dance Hits",
							channel: 51
						},
						{
							name: "electric area",
							channel: 52,
							text: "Progressive House, Trance & Electro"
						},
						{
							name: "Sirius XM Chill",
							channel: 53,
							text: "Smooth Electronic"
						}
					]
				},
				{
					text: "Country",
					children: [
						{
							text: "Classic Country",
							name: "Willie's Roadhouse",
							channel: 56
						},
						{
							channel: 58,
							text: "'90s Country and More",
							name: "Prime Country"
						},
						{
							channel: 59,
							name: "The Highway",
							text: "New Country"
						},
						{
							channel: 60,
							name: "Outlaw Country",
							text: "Rockin' Country Rebels"
						},
						{
							channel: 61,
							name: "Bluegrass Junction",
							text: "Bluegrass"
						}
					]
				},
				{
					text: "Christian",
					children: [
						{
							channel: 18,
							name: "enLighten",
							text: "Southern Gospel"
						},
						{
							channel: 63,
							name: "the message",
							text: "Christian Pop & Rock"
						},
						{
							channel: 64,
							name: "Praise",
							text: "Gospel"
						}
					]
				},
				{
					text: "Jazz/Standards",
					children: [
						{
							name: "Watercolors",
							text: "Smooth/Contemporary Jazz",
							channel: 66
						},
						{
							name: "Real Jazz",
							text: "Classic Jazz",
							channel: 67
						},
						{
							name: "spa",
							text: "New Age",
							channel: 68
						},
						{
							name: "escape",
							channel: 69,
							text: "Beautiful Music"
						},
						{
							name: "B. B. King's Bluesville",
							text: "B.B. King's Blues",
							channel: 70
						},
						{
							name: "Siriusly Sinatra",
							text: "Sinatra/American Standards",
							channel: 71
						},
						{
							name: "On Broadway",
							text: "Show Tunes",
							channel: 72
						}
					]
				},
				{
					text: "Classical",
					children: [
						{
							channel: 74,
							name: "Met Opera Radio",
							text: "Opera/Classical Vocals"
						},
						{
							channel: 75,
							name: "Sirius XM Pops",
							text: "Classical Pops"
						},
						{
							channel: 76,
							name: "Symphony Hall",
							text: "Traditional Classical"
						}
					]
				},
				{
					text: "Traffic & Weather",
					children: [
						{
							channel: 134,
							text: "Atlanta"
						},
						{
							channel: 134,
							text: "Baltimore"
						},
						{
							channel: 132,
							text: "Boston"
						},
						{
							channel: 135,
							text: "Chicago"
						},
						{
							channel: 137,
							text: "Dallas"
						},
						{
							channel: 135,
							text: "Detroit"
						},
						{
							channel: 137,
							text: "Ft. Worth"
						},
						{
							channel: 137,
							text: "Houston"
						},
						{
							channel: 138,
							text: "Las Vegas"
						},
						{
							channel: 140,
							text: "Los Angeles"
						},
						{
							channel: 136,
							text: "Miami"
						},
						{
							channel: 138,
							text: "Minneapolis"
						},
						{
							channel: 133,
							text: "New York"
						},
						{
							channel: 136,
							text: "Orlando"
						},
						{
							channel: 132,
							text: "Philadelphia"
						},
						{
							channel: 137,
							text: "Phoenix"
						},
						{
							channel: 132,
							text: "Pittsburg"
						},
						{
							channel: 139,
							text: "San Francisco"
						},
						{
							channel: 139,
							text: "San Diego"
						},
						{
							channel: 139,
							text: "Seattle"
						},
						{
							channel: 138,
							text: "St. Louis"
						},
						{
							channel: 138,
							text: "St. Paul"
						},
						{
							channel: 136,
							text: "St. Petersburg"
						},
						{
							channel: 136,
							text: "Tampa"
						},
						{
							channel: 134,
							text: "Washington, DC"
						}
					]
				}
			]
		}
	}
});