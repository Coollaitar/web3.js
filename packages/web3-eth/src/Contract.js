/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file Contract.js
 * @authors: Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */

import {AbstractContract} from 'web3-eth-contract';

export default class Contract extends AbstractContract {
    /**
     * @param {EthereumProvider|HttpProvider|WebsocketProvider|IpcProvider|String} provider
     * @param {ProvidersModuleFactory} providersModuleFactory
     * @param {MethodModuleFactory} methodModuleFactory
     * @param {ContractModuleFactory} contractModuleFactory
     * @param {PromiEvent} PromiEvent
     * @param {AbiCoder} abiCoder
     * @param {Utils} utils
     * @param {Object} formatters
     * @param {Accounts} accounts
     * @param {Object} abi
     * @param {String} address
     * @param {Object} options
     *
     * @constructor
     */
    constructor(
        provider,
        providersModuleFactory,
        methodModuleFactory,
        contractModuleFactory,
        PromiEvent,
        abiCoder,
        utils,
        formatters,
        accounts,
        abi,
        address,
        options
    ) {
        super(
            provider,
            providersModuleFactory,
            methodModuleFactory,
            contractModuleFactory,
            PromiEvent,
            abiCoder,
            utils,
            formatters,
            accounts,
            abi,
            address,
            options
        );
    }
}
