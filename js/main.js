var scroll     = document.querySelector('.sticky-scroll');
var scrollItem = document.querySelectorAll('.stick');

const handleScroll = (evt) =>
{

    let sectionId = evt.target.className.split(" ", 1);
    document.getElementById(`${sectionId}`).scrollIntoView({behaviour: 'smooth'});

    for(let i=0;i<scrollItem.length;i++) 
    {
        scrollItem[i].classList.remove('stick-active');
    }

    evt.target.classList.add('stick-active');

}

scroll.addEventListener('click', handleScroll);
