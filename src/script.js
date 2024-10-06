/*******************************************************
 * 
 * this is the file for the javascript to the website
 *
 *******************************************************/
	/***************************************************
		* 
		* typing text in the front page
		* 
		****************************************************/
		var typed=new Typed(".text",{
			strings:["CS innovative Clubs","CSE-Department","RGMCET","C I S C","EXCEL","PULSE","H 2 H","INSCRIBE","Z E N","C R E 8"],
			typeSpeed:80,
			backSpeed:80,
			backDelay:800,
			loop:true
		})
// --------------------------------------------

const showSidebar=()=>
{
    let sidebar= document.querySelector('.sidebar');
    sidebar.style.display="flex";
}
const hideBar=()=>
{
    let sidebar= document.querySelector('.sidebar');
    sidebar.style.display="none";
}
	
	function cardDisplay(){
		const cards = document.querySelectorAll('.card');
		/* console.log(cards) */
        const seeMore = document.getElementById('see-more');
		 
		/* alert("hhh"); */
		cards.forEach(card => {
                   	card.addEventListener('click', () => {
						/* alert("vv"); */
						seeMore.style.display ='block';
       				const profile = card.getAttribute('profile');
					const banner = card.getAttribute('banner');
					const head = card.getAttribute('head');
					const facebook = card.getAttribute('facebook');
					const twitt=card.getAttribute('twitt');
					const youtube = card.getAttribute('youtube');
					const insta = card.getAttribute('insta');
					/* alert(profile+banner+head+email+youtube+insta) */
        			const cardInformation = `
			<div class="see-more" id="seemore" >
					<div class="image-section">
						<div class="president-profile">
							<img src=${profile} alt="banner" id="profile" />
							<h1 id="name">${head}</h1>
					    </div>
					    <img src=${banner} alt="banner" id="banner" />
					</div>
			        <div class="social-media-part">
						<div class="link"><a href=${facebook}><img src="./src/images/facebook.png" style="width:40px" class="facebook" alt="facebook"></a><a href=${facebook} id="text-link"><p>www.facebook.com</p></a></div>
						<div class="link"><a href=${twitt}><img src="./src/images/email.png" style="width:40px" class="twit" alt="twitter" ></a><a href=${insta} id="text-link"><p>www.twitter.com</p></a></div>
						<div class="link"><a href=${insta}><img src="./src/images/instagram (1).png"  style="width:40px" class="instagram" alt="instagram"></a><a href=${insta} id="text-link"><p>www.instagram.com</p></a></div>
						<div class="link"><a href=${youtube}><img src="./src/images/youtube (1).png"  style="width:40px" class="youtube" alt="youtube"></a><a href=${insta} id="text-link"><p>www.youtube.com</p></a></div>
					</div>
			</div>`; // Replace with actual card information
        			
					seeMore.innerHTML = cardInformation;
            });
        });   
	}
	window.addEventListener('load',cardDisplay);
    function footerDisplay(){
        var footerButton=document.getElementById("footer");
		footerButton.style.display = footerButton.style.display === 'none' ? 'block' : 'none';
    }
	window.addEventListener('load',footerDisplay);
   