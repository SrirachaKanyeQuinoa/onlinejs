const library_version = "20251203.1 (online)"

/*
		 Simple client-side list of items.
		 type: "photo" or "video"
		 thumb: relative path to thumbnail
		 src: relative path to full image/video
		 title, date, description
		*/
const library = [
	// === EDIT THESE ENTRIES ===

	{ type: "photo", thumb: "Family_Photos_3/thumbnails/Family_Photos_3_00002_untitled_0002_0001_thumb.jpg", src: "Family_Photos_3/images_to_process/Family_Photos_3_00002_untitled_0002_0001.jpg", title: "Family at the Park - Scott", date: "2005-07-04", description: "Picnic at Grand Park." },
	{ type: "photo", thumb: "photos/thumbs/002-birthday.jpg", src: "photos/002-birthday.jpg", title: "Jack's 5th Birthday", date: "2008-11-15", description: "Cake and balloons." },
	{ type: "video", thumb: "video/thumbs/001-vacation.jpg", src: "video/001-vacation.mp4", title: "Summer 2010 - Lake", date: "2010-08-12", description: "Boat day at the lake. Duration: 03:12." }
	// add your files here
];