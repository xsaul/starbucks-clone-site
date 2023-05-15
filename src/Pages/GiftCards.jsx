import CardTerms from "../Components/CardTerms";
import GiftCardsSlider from "../Components/GiftCardsSlider";
import Footer from "../Components/Footer"

function GiftCards() {
  return (
 <main className="w-full px-[3rem] py-[1rem] bg-green-200">
      <GiftCardsSlider
      sectionName="FEATURED"
      cardImg1="https://globalassets.starbucks.com/assets/d546023396854e3dbe1d340a21825543.jpg"
      cardImg2="https://globalassets.starbucks.com/assets/14206ea6e74a43c6a0a5d4abc81e95bb.jpg"
      cardImg3="https://globalassets.starbucks.com/assets/e59a52bdd19448be9096d788b85a5d2f.jpg"
      cardImg4="https://globalassets.starbucks.com/assets/8c34f576af314654956200e08429e9bd.jpg"
      cardImg5="https://globalassets.starbucks.com/assets/7ad856a8cbdd4fbeb0119695a8d5b843.jpg"
      />
      <CardTerms />
      <GiftCardsSlider
      sectionName="BIRTHDAY"
      cardImg1="https://globalassets.starbucks.com/assets/b3c8d0d8a3bc48b18d570b382af46c20.jpg"
      cardImg2="https://globalassets.starbucks.com/assets/086f127933b1492c9b6311e77d32f6ba.jpg"
      cardImg3="https://globalassets.starbucks.com/assets/025674328bc54e35a4ba0988875e6e5b.jpg"
      cardImg4="https://globalassets.starbucks.com/assets/45f1c4ed8dac426ea31d09bc4296771c.jpg"
      cardImg5="https://globalassets.starbucks.com/assets/196581be9eda4e4cb0c3b33ac3241ea7.jpg"
      />
      <GiftCardsSlider
      sectionName="SPRING"
      cardImg1="https://globalassets.starbucks.com/assets/d546023396854e3dbe1d340a21825543.jpg"
      cardImg2="https://globalassets.starbucks.com/assets/d0df28dbc08f478eba00b26ca09bffe1.jpg"
      cardImg3="https://globalassets.starbucks.com/assets/b1bc1467fdd644aa87a83aa96bf8e17d.jpg"
      cardImg4="https://globalassets.starbucks.com/assets/be090dd487b54f4490b153e00f35136f.jpg"
      cardImg5="https://globalassets.starbucks.com/assets/5e0c21687dc64afba35ab74987b5bff5.jpg"
      />
      <GiftCardsSlider
      sectionName="EARTH MONTH"
      cardImg1="https://globalassets.starbucks.com/assets/14206ea6e74a43c6a0a5d4abc81e95bb.jpg"
      cardImg2="https://globalassets.starbucks.com/assets/9a1c7a65cc4e4946a96dcb7fa8afa51a.jpg"
      cardImg3="https://globalassets.starbucks.com/assets/8b136f9da31e4e4ebafd0516b448fb98.jpg"
      cardImg4="https://globalassets.starbucks.com/assets/92a2acfde0d74350bae518afe9928fea.jpg"
      cardImg5="https://globalassets.starbucks.com/assets/538d70aafcd640e8a336b1e81db0f5ad.jpg"
      />
      <GiftCardsSlider
      sectionName="WORKPLACE"
      cardImg1="https://globalassets.starbucks.com/assets/030cdc65712a4cb3b9a58483de6799b3.jpg"
      cardImg2="https://globalassets.starbucks.com/assets/c4176b3e9fe34b5087040869f703ab48.jpg"
      cardImg3="https://globalassets.starbucks.com/assets/28ae9dd37eee4f828627bd584b49f9f0.jpg"
      cardImg4="https://globalassets.starbucks.com/assets/974d46ec17774cb1bafa313d1db92bbf.jpg"
      cardImg5="https://globalassets.starbucks.com/assets/7ad856a8cbdd4fbeb0119695a8d5b843.jpg"
      />
      <Footer />
      </main>
  )
}

export default GiftCards