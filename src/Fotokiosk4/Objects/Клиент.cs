﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Fotokiosk4
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Клиент.
    /// </summary>
    // *** Start programmer edit section *** (Клиент CustomAttributes)

    // *** End programmer edit section *** (Клиент CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КлиентE", new string[] {
            "ОтправНаПочту.ФИО as \'ФИО\'",
            "Оплата.Дата as \'Дата оплаты\'",
            "Оплата.Время as \'Время оплаты\'",
            "Оплата.СпособОпл as \'Способ оплаты\'",
            "Оплата.Сумма as \'Сумма\'"}, Hidden=new string[] {
            "Оплата.Время"})]
    [View("КлиентL", new string[] {
            "ОтправНаПочту.ФИО as \'ФИО\'",
            "Оплата.Дата as \'Дата оплаты\'",
            "Оплата.Время as \'Время оплаты\'",
            "Оплата.СпособОпл as \'Способ оплаты\'",
            "Оплата.Сумма as \'Сумма\'"})]
    public class Клиент : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Fotokiosk4.ОтправНаПочту fОтправНаПочту;
        
        private IIS.Fotokiosk4.Оплата fОплата;
        
        // *** Start programmer edit section *** (Клиент CustomMembers)

        // *** End programmer edit section *** (Клиент CustomMembers)

        
        /// <summary>
        /// Клиент.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.Оплата CustomAttributes)

        // *** End programmer edit section *** (Клиент.Оплата CustomAttributes)
        [PropertyStorage(new string[] {
                "Оплата"})]
        [NotNull()]
        public virtual IIS.Fotokiosk4.Оплата Оплата
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.Оплата Get start)

                // *** End programmer edit section *** (Клиент.Оплата Get start)
                IIS.Fotokiosk4.Оплата result = this.fОплата;
                // *** Start programmer edit section *** (Клиент.Оплата Get end)

                // *** End programmer edit section *** (Клиент.Оплата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.Оплата Set start)

                // *** End programmer edit section *** (Клиент.Оплата Set start)
                this.fОплата = value;
                // *** Start programmer edit section *** (Клиент.Оплата Set end)

                // *** End programmer edit section *** (Клиент.Оплата Set end)
            }
        }
        
        /// <summary>
        /// Клиент.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.ОтправНаПочту CustomAttributes)

        // *** End programmer edit section *** (Клиент.ОтправНаПочту CustomAttributes)
        [PropertyStorage(new string[] {
                "ОтправНаПочту"})]
        [NotNull()]
        public virtual IIS.Fotokiosk4.ОтправНаПочту ОтправНаПочту
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.ОтправНаПочту Get start)

                // *** End programmer edit section *** (Клиент.ОтправНаПочту Get start)
                IIS.Fotokiosk4.ОтправНаПочту result = this.fОтправНаПочту;
                // *** Start programmer edit section *** (Клиент.ОтправНаПочту Get end)

                // *** End programmer edit section *** (Клиент.ОтправНаПочту Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.ОтправНаПочту Set start)

                // *** End programmer edit section *** (Клиент.ОтправНаПочту Set start)
                this.fОтправНаПочту = value;
                // *** Start programmer edit section *** (Клиент.ОтправНаПочту Set end)

                // *** End programmer edit section *** (Клиент.ОтправНаПочту Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КлиентE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентE", typeof(IIS.Fotokiosk4.Клиент));
                }
            }
            
            /// <summary>
            /// "КлиентL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентL", typeof(IIS.Fotokiosk4.Клиент));
                }
            }
        }
    }
}
