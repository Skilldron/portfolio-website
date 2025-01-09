import { ModeToggle } from "./components/ui/mode-toggle";
import imgUrl from "./assets/selfie.jpg";
import { AspectRatio } from "./components/ui/aspect-ratio";

function App() {
  return (
    <>
      <ModeToggle />
      <div className="flex flex-col xl:flex-row justify-center gap-20 items-start w-2/3 m-auto xl:w-auto">
        <div className="flex flex-col items-center justify-center mt-10 xl:m-0 left-0 self-center xl:self-start rounded-lg xl:sticky xl:top-[40px] h-1/3 max-w-2xl bg-white">
          <div className="flex flex-col content-between items-center text-muted py-10 px-7">
            <div className="w-10/12 self-center pb-5">
              <AspectRatio ratio={3.5 / 4} className="bg-muted rounded-xl">
                <img
                  src={imgUrl}
                  alt="Photo portrait Harold Delory"
                  className="h-full w-full rounded-md object-cover object-top"
                />
              </AspectRatio>
            </div>
            <div className="flex flex-col items-center text-center flex-nowrap gap-20">
              <h1 className="text-black text-2xl">Harold delory</h1>
              <div className="max-w-80">
                <p>
                  Un développeur qui aime découvrir et apprendre de nouvelles
                  choses ! L&apos;inconnu ne m&apos;effraie pas, je le vois
                  comme un nouveau défis à relever.
                </p>
                <div className="flex flex-row flex-nowrap gap-5">
                  <div>réseau 1</div>
                  <div>réseau 1</div>
                  <div>réseau 1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-xl">
          <h1 className="text-6xl">
            Développeur <span>pationnée</span>
          </h1>
          <p>
            texte employé dans la composition et la mise en page avant
            impression. Le Lorem Ipsum est le faux texte standard de
            l'imprimerie depuis les années 1500, quand un imprimeur anonyme
            assembla ensemble des morceaux de texte pour réaliser un livre
            spécimen de polices de texte. Il n'a pas fait que survivre cinq
            siècles, mais s'est aussi adapté à la bureautique informatique, sans
            que son contenu n'en soit modifié. Il a été popularisé dans les
            années 1960 grâce à la vente de feuilles Letraset contenant des
            passages du Lorem Ipsum, et, plus récemment, par son inclusion dans
            des applications de mise en page de texte, comme Aldus PageMaker.
            Qu'est-ce que le Lorem Ipsum? Le Lorem Ipsum est simplement du faux
            texte employé dans la composition et la mise en page avant
            impression. Le Lorem Ipsum est le faux texte standard de
            l'imprimerie depuis les années 1500, quand un imprimeur anonyme
            assembla ensemble des morceaux de texte pour réaliser un livre
            spécimen de polices de texte. Il n'a pas fait que survivre cinq
            siècles, mais s'est aussi adapté à la bureautique informatique, sans
            que son contenu n'en soit modifié. Il a été popularisé dans les
            années 1960 grâce à la vente de feuilles Letraset contenant des
            passages du Lorem Ipsum, et, plus récemment, par son inclusion dans
            des applications de mise en page de texte, comme Aldus
            PageMaker.Qu'est-ce que le Lorem Ipsum? Le Lorem Ipsum est
            simplement du faux texte employé dans la composition et la mise en
            page avant impression. Le Lorem Ipsum est le faux texte standard de
            l'imprimerie depuis les années 1500, quand un imprimeur anonyme
            assembla ensemble des morceaux de texte pour réaliser un livre
            spécimen de polices de texte. Il n'a pas fait que survivre cinq
            siècles, mais s'est aussi adapté à la bureautique informatique, sans
            que son contenu n'en soit modifié. Il a été popularisé dans les
            années 1960 grâce à la vente de feuilles Letraset contenant des
            passages du Lorem Ipsum, et, plus récemment, par son inclusion dans
            des applications de mise en page de texte, comme Aldus
            PageMaker.Qu'est-ce que le Lorem Ipsum? Le Lorem Ipsum est
            simplement du faux texte employé dans la composition et la mise en
            page avant impression. Le Lorem Ipsum est le faux texte standard de
            l'imprimerie depuis les années 1500, quand un imprimeur anonyme
            assembla ensemble des morceaux de texte pour réaliser un livre
            spécimen de polices de texte. Il n'a pas fait que survivre cinq
            siècles, mais s'est aussi adapté à la bureautique informatique, sans
            que son contenu n'en soit modifié. Il a été popularisé dans les
            années 1960 grâce à la vente de feuilles Letraset contenant des
            passages du Lorem Ipsum, et, plus récemment, par son inclusion dans
            des applications de mise en page de texte, comme Aldus
            PageMaker.Qu'est-ce que le Lorem Ipsum? Le Lorem Ipsum est
            simplement du faux texte employé dans la composition et la mise en
            page avant impression. Le Lorem Ipsum est le faux texte standard de
            l'imprimerie depuis les années 1500, quand un imprimeur anonyme
            assembla ensemble des morceaux de texte pour réaliser un livre
            spécimen de polices de texte. Il n'a pas fait que survivre cinq
            siècles, mais s'est aussi adapté à la bureautique informatique, sans
            que son contenu n'en soit modifié. Il a été popularisé dans les
            années 1960 grâce à la vente de feuilles Letraset contenant des
            passages du Lorem Ipsum, et, plus récemment, par son inclusion dans
            des applications de mise en page de texte, comme Aldus
            PageMaker.Qu'est-ce que le Lorem Ipsum? Le Lorem Ipsum est
            simplement du faux texte employé dans la composition et la mise en
            page avant impression. Le Lorem Ipsum est le faux texte standard de
            l'imprimerie depuis les années 1500, quand un imprimeur anonyme
            assembla ensemble des morceaux de texte pour réaliser un livre
            spécimen de polices de texte. Il n'a pas fait que survivre cinq
            siècles, mais s'est aussi adapté à la bureautique informatique, sans
            que son contenu n'en soit modifié. Il a été popularisé dans les
            années 1960 grâce à la vente de feuilles Letraset contenant des
            passages du Lorem Ipsum, et, plus récemment, par son inclusion dans
            des applications de mise en page de texte, comme Aldus
            PageMaker.Qu'est-ce que le Lorem Ipsum? Le Lorem Ipsum est
            simplement du faux texte employé dans la composition et la mise en
            page avant impression. Le Lorem Ipsum est le faux texte standard de
            l'imprimerie depuis les années 1500, quand un imprimeur anonyme
            assembla ensemble des morceaux de texte pour réaliser un livre
            spécimen de polices de texte. Il n'a pas fait que survivre cinq
            siècles, mais s'est aussi adapté à la bureautique informatique, sans
            que son contenu n'en soit modifié. Il a été popularisé dans les
            années 1960 grâce à la vente de feuilles Letraset contenant des
            passages du Lorem Ipsum, et, plus récemment, par son inclusion dans
            des applications de mise en page de texte, comme Aldus
            PageMaker.Qu'est-ce que le Lorem Ipsum? Le Lorem Ipsum est
            simplement du faux texte employé dans la composition et la mise en
            page avant impression. Le Lorem Ipsum est le faux texte standard de
            l'imprimerie depuis les années 1500, quand un imprimeur anonyme
            assembla ensemble des morceaux de texte pour réaliser un livre
            spécimen de polices de texte. Il n'a pas fait que survivre cinq
            siècles, mais s'est aussi adapté à la bureautique informatique, sans
            que son contenu n'en soit modifié. Il a été popularisé dans les
            années 1960 grâce à la vente de feuilles Letraset contenant des
            passages du Lorem Ipsum, et, plus récemment, par son inclusion dans
            des applications de mise en page de texte, comme Aldus
            PageMaker.Qu'est-ce que le Lorem Ipsum? Le Lorem Ipsum est
            simplement du faux texte employé dans la composition et la mise en
            page avant impression. Le Lorem Ipsum est le faux texte standard de
            l'imprimerie depuis les années 1500, quand un imprimeur anonyme
            assembla ensemble des morceaux de texte pour réaliser un livre
            spécimen de polices de texte. Il n'a pas fait que survivre cinq
            siècles, mais s'est aussi adapté à la bureautique informatique, sans
            que son contenu n'en soit modifié. Il a été popularisé dans les
            années 1960 grâce à la vente de feuilles Letraset contenant des
            passages du Lorem Ipsum, et, plus récemment, par son inclusion dans
            des applications de mise en page de texte, comme Aldus
            PageMaker.Qu'est-ce que le Lorem Ipsum? Le Lorem Ipsum est
            simplement du faux texte employé dans la composition et la mise en
            page avant impression. Le Lorem Ipsum est le faux texte standard de
            l'imprimerie depuis les années 1500, quand un imprimeur anonyme
            assembla ensemble des morceaux de texte pour réaliser un livre
            spécimen de polices de texte. Il n'a pas fait que survivre cinq
            siècles, mais s'est aussi adapté à la bureautique informatique, sans
            que son contenu n'en soit modifié. Il a été popularisé dans les
            années 1960 grâce à la vente de feuilles Letraset contenant des
            passages du Lorem Ipsum, et, plus récemment, par son inclusion dans
            des applications de mise en page de texte, comme Aldus
            PageMaker.Qu'est-ce que le Lorem Ipsum? Le Lorem Ipsum est
            simplement du faux texte employé dans la composition et la mise en
            page avant impression. Le Lorem Ipsum est le faux texte standard de
            l'imprimerie depuis les années 1500, quand un imprimeur anonyme
            assembla ensemble des morceaux de texte pour réaliser un livre
            spécimen de polices de texte. Il n'a pas fait que survivre cinq
            siècles, mais s'est aussi adapté à la bureautique informatique, sans
            que son contenu n'en soit modifié. Il a été popularisé dans les
            années 1960 grâce à la vente de feuilles Letraset contenant des
            passages du Lorem Ipsum, et, plus récemment, par son inclusion dans
            des applications de mise en page de texte, comme Aldus PageMaker.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
