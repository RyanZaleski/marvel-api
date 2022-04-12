document.querySelector('button').addEventListener('click',fetchData)


    function fetchData(){

main.classList.toggle('hidden');
header.classList.toggle('center')

fetch('https://mcuapi.herokuapp.com/api/v1/movies')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.data)
      
     
        // Captain America
      document.querySelector('#firstAvengerH1').innerText = `1. ${data.data[4].title}`
      document.querySelector('#firstAvengerP').innerText = data.data[4].overview
      document.querySelector('#firstAvengerH6').innerText = `Directed by ${data.data[4].directed_by}`
      document.querySelector('#firstAvengerDate').innerText = `Release date: ${data.data[4].release_date}`
      document.querySelector('#firstAvengerTime').innerText = `Running time ${data.data[4].duration} mins`
      document.querySelector('#firstAvengerImg').src = data.data[4].cover_url
        
      
      // Captain Marvel
      document.querySelector('#captainMarvelH1').innerText = `2. ${data.data[26].title}`
      document.querySelector('#captainMarvelP').innerText = data.data[26].overview
      document.querySelector('#captainMarvelH6').innerText = `Directed by ${data.data[26].directed_by}`
      document.querySelector('#captainMarvelDate').innerText = `Release date: ${data.data[26].release_date}`
      document.querySelector('#captainMarvelTime').innerText = `Running time ${data.data[26].duration} mins`
      document.querySelector('#captainMarvelImg').src = data.data[26].cover_url
        
      
      // Iron Man
      document.querySelector('#ironH1').innerText = `3. ${data.data[0].title}`
      document.querySelector('#ironP').innerText = data.data[0].overview
      document.querySelector('#ironH6').innerText = `Directed by ${data.data[0].directed_by}`
      document.querySelector('#ironDate').innerText = `Release date: ${data.data[0].release_date}`
      document.querySelector('#ironTime').innerText = `Running time ${data.data[0].duration} mins`
      document.querySelector('#ironImg').src = data.data[0].cover_url
        
      
      // Iron Man 2
      document.querySelector('#ironManTwoH1').innerText = `4. ${data.data[2].title}`
      document.querySelector('#ironManTwoP').innerText = data.data[2].overview
      document.querySelector('#ironManTwoH6').innerText = `Directed by ${data.data[2].directed_by}`
      document.querySelector('#ironManTwoDate').innerText = `Release date: ${data.data[2].release_date}`
      document.querySelector('#ironManTwoTime').innerText = `Running time ${data.data[2].duration} mins`
      document.querySelector('#ironManTwoImg').src = data.data[2].cover_url
       
      
      // Hulk
      document.querySelector('#hulkH1').innerText = `5. ${data.data[1].title}`
      document.querySelector('#hulkP').innerText = data.data[1].overview
      document.querySelector('#hulkH6').innerText = `Directed by ${data.data[1].directed_by}`
      document.querySelector('#hulkDate').innerText = `Release date: ${data.data[1].release_date}`
      document.querySelector('#hulkTime').innerText = `Running time ${data.data[1].duration} mins`
      document.querySelector('#hulkImg').src = data.data[1].cover_url
        
      
      // Thor
      document.querySelector('#thorH1').innerText = `6. ${data.data[3].title}`
      document.querySelector('#thorP').innerText = data.data[3].overview
      document.querySelector('#thorH6').innerText = `Directed by ${data.data[3].directed_by}`
      document.querySelector('#thorDate').innerText = `Release date: ${data.data[3].release_date}`
      document.querySelector('#thorTime').innerText = `Running time ${data.data[3].duration} mins`
      document.querySelector('#thorImg').src = data.data[3].cover_url
       
      
      // The Avengers
      document.querySelector('#theAvengersH1').innerText = `7. ${data.data[5].title}`
      document.querySelector('#theAvengersP').innerText = data.data[5].overview
      document.querySelector('#theAvengersH6').innerText = `Directed by ${data.data[5].directed_by}`
      document.querySelector('#theAvengersDate').innerText = `Release date: ${data.data[5].release_date}`
      document.querySelector('#theAvengersTime').innerText = `Running time ${data.data[5].duration} mins`
      document.querySelector('#theAvengersImg').src = data.data[5].cover_url
       
      
      // Iron Man Three
      document.querySelector('#ironManThreeH1').innerText = `8. ${data.data[6].title}`
      document.querySelector('#ironManThreeP').innerText = data.data[6].overview
      document.querySelector('#ironManThreeH6').innerText = `Directed by ${data.data[6].directed_by}`
      document.querySelector('#ironManThreeDate').innerText = `Release date: ${data.data[6].release_date}`
      document.querySelector('#ironManThreeTime').innerText = `Running time ${data.data[6].duration} mins`
      document.querySelector('#ironManThreeImg').src = data.data[6].cover_url

      // Thor Two
      document.querySelector('#thorTwoH1').innerText = `9. ${data.data[7].title}`
      document.querySelector('#thorTwoP').innerText = data.data[7].overview
      document.querySelector('#thorTwoH6').innerText = `Directed by ${data.data[7].directed_by}`
      document.querySelector('#thorTwoDate').innerText = `Release date: ${data.data[7].release_date}`
      document.querySelector('#thorTwoTime').innerText = `Running time ${data.data[7].duration} mins`
      document.querySelector('#thorTwoImg').src = data.data[7].cover_url

      // Winter Soldier
      document.querySelector('#winterSoldierH1').innerText = `10. ${data.data[8].title}`
      document.querySelector('#winterSoldierP').innerText = data.data[8].overview
      document.querySelector('#winterSoldierH6').innerText = `Directed by ${data.data[8].directed_by}`
      document.querySelector('#winterSoldierDate').innerText = `Release date: ${data.data[8].release_date}`
      document.querySelector('#winterSoldierTime').innerText = `Running time ${data.data[8].duration} mins`
      document.querySelector('#winterSoldierImg').src = data.data[8].cover_url

      // Guardians Of The Galaxy
      document.querySelector('#guardiansH1').innerText = `11. ${data.data[11].title}`
      document.querySelector('#guardiansP').innerText = data.data[11].overview
      document.querySelector('#guardiansH6').innerText = `Directed by ${data.data[11].directed_by}`
      document.querySelector('#guardiansDate').innerText = `Release date: ${data.data[11].release_date}`
      document.querySelector('#guardiansTime').innerText = `Running time ${data.data[11].duration} mins`
      document.querySelector('#guardiansImg').src = data.data[11].cover_url

      // Guardians Of The Galaxy Vol. 2
      document.querySelector('#guardiansTwoH1').innerText = `12. ${data.data[16].title}`
      document.querySelector('#guardiansTwoP').innerText = data.data[16].overview
      document.querySelector('#guardiansTwoH6').innerText = `Directed by ${data.data[16].directed_by}`
      document.querySelector('#guardiansTwoDate').innerText = `Release date: ${data.data[16].release_date}`
      document.querySelector('#guardiansTwoTime').innerText = `Running time ${data.data[16].duration} mins`
      document.querySelector('#guardiansTwoImg').src = data.data[16].cover_url

      // Avengers: Age of Ultron
      document.querySelector('#ultronH1').innerText = `13. ${data.data[12].title}`
      document.querySelector('#ultronP').innerText = data.data[12].overview
      document.querySelector('#ultronH6').innerText = `Directed by ${data.data[12].directed_by}`
      document.querySelector('#ultronDate').innerText = `Release date: ${data.data[12].release_date}`
      document.querySelector('#ultronTime').innerText = `Running time ${data.data[12].duration} mins`
      document.querySelector('#ultronImg').src = data.data[12].cover_url

      // Ant Man
      document.querySelector('#antH1').innerText = `14. ${data.data[13].title}`
      document.querySelector('#antP').innerText = data.data[13].overview
      document.querySelector('#antH6').innerText = `Directed by ${data.data[13].directed_by}`
      document.querySelector('#antDate').innerText = `Release date: ${data.data[13].release_date}`
      document.querySelector('#antTime').innerText = `Running time ${data.data[13].duration} mins`
      document.querySelector('#antImg').src = data.data[13].cover_url

      // Captain America: Civil War
      document.querySelector('#civilWarH1').innerText = `15. ${data.data[14].title}`
      document.querySelector('#civilWarP').innerText = data.data[14].overview
      document.querySelector('#civilWarH6').innerText = `Directed by ${data.data[14].directed_by}`
      document.querySelector('#civilWarDate').innerText = `Release date: ${data.data[14].release_date}`
      document.querySelector('#civilWarTime').innerText = `Running time ${data.data[14].duration} mins`
      document.querySelector('#civilWarImg').src = data.data[14].cover_url

      // Black Widow
      document.querySelector('#blackWidowH1').innerText = `16. ${data.data[29].title}`
      document.querySelector('#blackWidowP').innerText = data.data[29].overview
      document.querySelector('#blackWidowH6').innerText = `Directed by ${data.data[29].directed_by}`
      document.querySelector('#blackWidowDate').innerText = `Release date: ${data.data[29].release_date}`
      document.querySelector('#blackWidowTime').innerText = `Running time ${data.data[29].duration} mins`
      document.querySelector('#blackWidowImg').src = data.data[29].cover_url

      // Spiderman: Homecoming
      document.querySelector('#homecomingH1').innerText = `17. ${data.data[17].title}`
      document.querySelector('#homecomingP').innerText = data.data[17].overview
      document.querySelector('#homecomingH6').innerText = `Directed by ${data.data[17].directed_by}`
      document.querySelector('#homecomingDate').innerText = `Release date: ${data.data[17].release_date}`
      document.querySelector('#homecomingTime').innerText = `Running time ${data.data[17].duration} mins`
      document.querySelector('#homecomingImg').src = data.data[17].cover_url

    // Black Panther
    document.querySelector('#blackPantherH1').innerText = `18. ${data.data[23].title}`
    document.querySelector('#blackPantherP').innerText = data.data[23].overview
    document.querySelector('#blackPantherH6').innerText = `Directed by ${data.data[23].directed_by}`
    document.querySelector('#blackPantherDate').innerText = `Release date: ${data.data[23].release_date}`
    document.querySelector('#blackPantherTime').innerText = `Running time ${data.data[23].duration} mins`
    document.querySelector('#blackPantherImg').src = data.data[23].cover_url

    // Doctor Strange
    document.querySelector('#strangeH1').innerText = `19. ${data.data[15].title}`
    document.querySelector('#strangeP').innerText = data.data[15].overview
    document.querySelector('#strangeH6').innerText = `Directed by ${data.data[15].directed_by}`
    document.querySelector('#strangeDate').innerText = `Release date: ${data.data[15].release_date}`
    document.querySelector('#strangeTime').innerText = `Running time ${data.data[15].duration} mins`
    document.querySelector('#strangeImg').src = data.data[15].cover_url
      
    // Thor: Ragnarok
    document.querySelector('#ragnarokH1').innerText = `20. ${data.data[18].title}`
    document.querySelector('#ragnarokP').innerText = data.data[18].overview
    document.querySelector('#ragnarokH6').innerText = `Directed by ${data.data[18].directed_by}`
    document.querySelector('#ragnarokDate').innerText = `Release date: ${data.data[18].release_date}`
    document.querySelector('#ragnarokTime').innerText = `Running time ${data.data[18].duration} mins`
    document.querySelector('#ragnarokImg').src = data.data[18].cover_url

    // Ant-man and the Wasp
    document.querySelector('#antWaspH1').innerText = `21. ${data.data[20].title}`
    document.querySelector('#antWaspP').innerText = 'As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.'
    document.querySelector('#antWaspH6').innerText = `Directed by ${data.data[20].directed_by}`
    document.querySelector('#antWaspDate').innerText = `Release date: ${data.data[20].release_date}`
    document.querySelector('#antWaspTime').innerText = `Running time 149 mins`
    document.querySelector('#antWaspImg').src = data.data[20].cover_url
      
    // Avengers: Infinity War
    document.querySelector('#infinityWarH1').innerText = `22. ${data.data[24].title}`
    document.querySelector('#infinityWarP').innerText = data.data[24].overview
    document.querySelector('#infinityWarH6').innerText = `Directed by ${data.data[24].directed_by}`
    document.querySelector('#infinityWarDate').innerText = `Release date: ${data.data[24].release_date}`
    document.querySelector('#infinityWarTime').innerText = `Running time ${data.data[24].duration} mins`
   document.querySelector('#infinityWarImg').src = data.data[24].cover_url
    
   // Avengers: End Game
   document.querySelector('#endGameH1').innerText = `23. ${data.data[27].title}`
   document.querySelector('#endGameP').innerText = data.data[27].overview
   document.querySelector('#endGameH6').innerText = `Directed by ${data.data[27].directed_by}`
   document.querySelector('#endGameDate').innerText = `Release date: ${data.data[27].release_date}`
   document.querySelector('#endGameTime').innerText = `Running time ${data.data[27].duration} mins`
   document.querySelector('#endGameImg').src = data.data[27].cover_url
    

   // Spider-Man: Far From Home
   document.querySelector('#farFromHomeH1').innerText = `24. ${data.data[28].title}`
   document.querySelector('#farFromHomeP').innerText = data.data[28].overview
   document.querySelector('#farFromHomeH6').innerText = `Directed by ${data.data[28].directed_by}`
   document.querySelector('#farFromHomeDate').innerText = `Release date: ${data.data[28].release_date}`
   document.querySelector('#farFromHomeTime').innerText = `Running time ${data.data[28].duration} mins`
   document.querySelector('#farFromHomeImg').src = data.data[28].cover_url

    // Eternals
    document.querySelector('#eternalsH1').innerText = `25. ${data.data[31].title}`
    document.querySelector('#eternalsP').innerText = data.data[31].overview
    document.querySelector('#eternalsH6').innerText = `Directed by ${data.data[31].directed_by}`
    document.querySelector('#eternalsDate').innerText = `Release date: ${data.data[31].release_date}`
    document.querySelector('#eternalsTime').innerText = `Running time ${data.data[31].duration} mins`
    document.querySelector('#eternalsImg').src = data.data[31].cover_url

    // Shang-Chi and the Legend of the Ten Rings
    document.querySelector('#shang-chiH1').innerText = `26. ${data.data[30].title}`
    document.querySelector('#shang-chiP').innerText = data.data[30].overview
    document.querySelector('#shang-chiH6').innerText = `Directed by ${data.data[30].directed_by}`
    document.querySelector('#shang-chiDate').innerText = `Release date: ${data.data[30].release_date}`
    document.querySelector('#shang-chiTime').innerText = `Running time ${data.data[30].duration} mins`
    document.querySelector('#shang-chiImg').src = data.data[30].cover_url

    // Spider-Man: No Way Home
    document.querySelector('#noWayHomeH1').innerText = `27. ${data.data[32].title}`
    document.querySelector('#noWayHomeP').innerText = data.data[32].overview
    document.querySelector('#noWayHomeH6').innerText = `Directed by ${data.data[32].directed_by}`
    document.querySelector('#noWayHomeDate').innerText = `Release date: ${data.data[32].release_date}`
    document.querySelector('#noWayHomeTime').innerText = `Running time ${data.data[32].duration} mins`
    document.querySelector('#noWayHomeImg').src = data.data[32].cover_url

    // Multiverse
    document.querySelector('#multiverseH1').innerText = `28. ${data.data[33].title}`
    document.querySelector('#multiverseP').innerText = data.data[33].overview
    document.querySelector('#multiverseH6').innerText = `Directed by ${data.data[33].directed_by}`
    document.querySelector('#multiverseDate').innerText = `Release date: ${data.data[33].release_date}`
    document.querySelector('#multiverseTime').innerText = `Running time 126 mins`
    document.querySelector('#multiverseImg').src = data.data[33].cover_url

    



})


    .catch(err => {
        console.log(`error ${err}`)
    });




}
