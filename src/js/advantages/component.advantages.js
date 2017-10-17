.component("advantagesBlock", {
    templateUrl: 'template/advantages.html',
    controllerAs: 'vm',
    controller: function(){
    	this.allAdvantages = [
          {
            icone: "settings_remote",
            header: "Физический взлом датчиков",
            info: "Сработают сенсоры вскрытия"
          },
          {
            icone: "lock_outline",
            header: "Сканирование протоколов",
            info: "Не получится, все данные зашифрованы"
          },
          {
            icone: "warning",
            header: "Пропала связь хаба с сервером",
            info: "Мы узнаем об этом мгновенно"
          },
          {
            icone: "settings_input_antenna",
            header: "Глушение радиоканала",
            info: "Датчики выберут чистую частоту"
          },
          {
            icone: "directions_run",
            header: "Вторжение",
            info: "Датчики движения с технологией FirstStepDetection зафиксируют злоумышленника"
          },
          {
            icone: "perm_scan_wifi",
            header: "Вышел из строя датчик",
            info: "Благодаря частым пингам, об этом сразу станет известно"
          },
          {
            icone: "router",
            header: "Поломка роутера или сбой у провайдера",
            info: "Сигнал тревоги пройдет по резервному GSM каналу связи"
          },
          {
            icone: "battery_alert",
            header: "Отключение света",
            info: "Система продолжит работу от резервного аккумулятора"
          },];
    }
})