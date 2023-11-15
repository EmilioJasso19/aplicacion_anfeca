import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  // Array de objetos para restaurantes
  restaurantItems = [
    // ... tus objetos para restaurantes aquí con propiedades title, imgSrc, description, rating
    {
      title: 'Restaurante 1',
      imgSrc: 'https://img.freepik.com/foto-gratis/interior-restaurante_1127-3394.jpg?w=740&t=st=1699856103~exp=1699856703~hmac=9538d5c71e04113d9a7111e1b5e3bfac28d628fc787d0cd0743113af7ba69ee6',
      description: 'Restaurante 1 es un restaurante con variados platillos',
      rating: 5.0
    },
    {
      title: 'Restaurante 2',
      imgSrc: 'https://img.freepik.com/foto-gratis/interior-restaurante_1127-3394.jpg?w=740&t=st=1699856103~exp=1699856703~hmac=9538d5c71e04113d9a7111e1b5e3bfac28d628fc787d0cd0743113af7ba69ee6',
      description: 'Restaurante 2 es un restaurante con variados platillos',
      rating: 5.0
    },
    {
      title: 'Restaurante 3',
      imgSrc: 'https://img.freepik.com/foto-gratis/interior-restaurante_1127-3394.jpg?w=740&t=st=1699856103~exp=1699856703~hmac=9538d5c71e04113d9a7111e1b5e3bfac28d628fc787d0cd0743113af7ba69ee6',
      description: 'Restaurante 3 es un restaurante con variados platillos',
      rating: 5.0
    },
    {
      title: 'Restaurante 4',
      imgSrc: 'https://img.freepik.com/foto-gratis/interior-restaurante_1127-3394.jpg?w=740&t=st=1699856103~exp=1699856703~hmac=9538d5c71e04113d9a7111e1b5e3bfac28d628fc787d0cd0743113af7ba69ee6',
      description: 'Restaurante 4 es un restaurante con variados platillos',
      rating: 5.0
    },
    {
      title: 'Restaurante 5',
      imgSrc: 'https://img.freepik.com/foto-gratis/interior-restaurante_1127-3394.jpg?w=740&t=st=1699856103~exp=1699856703~hmac=9538d5c71e04113d9a7111e1b5e3bfac28d628fc787d0cd0743113af7ba69ee6',
      description: 'Restaurante 5 es un restaurante con variados platillos',
      rating: 5.0
    },
    {
      title: 'Restaurante 6',
      imgSrc: 'https://img.freepik.com/foto-gratis/interior-restaurante_1127-3394.jpg?w=740&t=st=1699856103~exp=1699856703~hmac=9538d5c71e04113d9a7111e1b5e3bfac28d628fc787d0cd0743113af7ba69ee6',
      description: 'Restaurante 6 es un restaurante con variados platillos',
      rating: 5.0
    },
    {
      title: 'Restaurante 7',
      imgSrc: 'https://img.freepik.com/foto-gratis/interior-restaurante_1127-3394.jpg?w=740&t=st=1699856103~exp=1699856703~hmac=9538d5c71e04113d9a7111e1b5e3bfac28d628fc787d0cd0743113af7ba69ee6',
      description: 'Restaurante 7 es un restaurante con variados platillos',
      rating: 5.0
    },
    {
      title: 'Restaurante 8',
      imgSrc: 'https://img.freepik.com/foto-gratis/interior-restaurante_1127-3394.jpg?w=740&t=st=1699856103~exp=1699856703~hmac=9538d5c71e04113d9a7111e1b5e3bfac28d628fc787d0cd0743113af7ba69ee6',
      description: 'Restaurante 8 es un restaurante con variados platillos',
      rating: 5.0
    },
  ];

  // Array de objetos para platillos
  dishItems = [
    // ... tus objetos para platillos aquí con propiedades title, imgSrc, description (sin rating)
    {
      title: 'Pastel',
      imgSrc: 'https://img.freepik.com/free-photo/easter-pastries-eggs-concrete-background_78826-3322.jpg?w=1380&t=st=1699128764~exp=1699129364~hmac=43d7f88589d2303a6ad8ce33f23937c76e553afd08fc2675312a647098c368c1',
      description: 'El mejor platillo que probaras en tu VIDA!',
    },
    {
      title: 'Mariscos',
      imgSrc: 'https://img.freepik.com/free-photo/easter-pastries-eggs-concrete-background_78826-3322.jpg?w=1380&t=st=1699128764~exp=1699129364~hmac=43d7f88589d2303a6ad8ce33f23937c76e553afd08fc2675312a647098c368c1',
      description: 'El mejor platillo que probaras en tu VIDA!',
    },
    {
      title: 'Café',
      imgSrc: 'https://img.freepik.com/free-photo/easter-pastries-eggs-concrete-background_78826-3322.jpg?w=1380&t=st=1699128764~exp=1699129364~hmac=43d7f88589d2303a6ad8ce33f23937c76e553afd08fc2675312a647098c368c1',
      description: 'El mejor platillo que probaras en tu VIDA!',
    },
    {
      title: 'Café',
      imgSrc: 'https://img.freepik.com/free-photo/easter-pastries-eggs-concrete-background_78826-3322.jpg?w=1380&t=st=1699128764~exp=1699129364~hmac=43d7f88589d2303a6ad8ce33f23937c76e553afd08fc2675312a647098c368c1',
      description: 'El mejor platillo que probaras en tu VIDA!',
    },
    {
      title: 'Café',
      imgSrc: 'https://img.freepik.com/free-photo/easter-pastries-eggs-concrete-background_78826-3322.jpg?w=1380&t=st=1699128764~exp=1699129364~hmac=43d7f88589d2303a6ad8ce33f23937c76e553afd08fc2675312a647098c368c1',
      description: 'El mejor platillo que probaras en tu VIDA!',
    },
    {
      title: 'Café',
      imgSrc: 'https://img.freepik.com/free-photo/easter-pastries-eggs-concrete-background_78826-3322.jpg?w=1380&t=st=1699128764~exp=1699129364~hmac=43d7f88589d2303a6ad8ce33f23937c76e553afd08fc2675312a647098c368c1',
      description: 'El mejor platillo que probaras en tu VIDA!',
    },
    {
      title: 'Café',
      imgSrc: 'https://img.freepik.com/free-photo/easter-pastries-eggs-concrete-background_78826-3322.jpg?w=1380&t=st=1699128764~exp=1699129364~hmac=43d7f88589d2303a6ad8ce33f23937c76e553afd08fc2675312a647098c368c1',
      description: 'El mejor platillo que probaras en tu VIDA!',
    },
  ];

  showRestaurants = true;  // Variable para controlar qué lista se muestra

  constructor(private router: Router) { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    this.showRestaurants = ev.detail.value === 'restaurantes';
  }
  // El resto del componente...

// Métodos para la navegación (simulados aquí, deberías implementar la lógica real de navegación)
  navigateHome() {
    this.router.navigateByUrl('/home');
  }

  navigateSearch() {
    this.router.navigateByUrl('/cuenta');
  }

  navigateFavorites() {
    // Tu código para navegar a Favoritos
  }

  navigateSettings() {
    // Tu código para navegar a Configuración
  }

}
