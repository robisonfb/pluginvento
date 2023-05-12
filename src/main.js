module.exports = (vemto) => {

    return {
        canInstall() {
            return true
        },

        templateReplacements() {
            vemto.log.message('Replacing stubs for Theme...')

            let basePath = '/views/frameworks/tailwind'
            let InputPath = '/views/inputs/blade'

            vemto.log.message('Controller ...')
            vemto.replaceTemplate(`/Controller.vemtl`, 'files/Controller.vemtl')

            vemto.log.message('Routes ...')
            vemto.replaceTemplate(`/Routes.vemtl`, 'files/Routes.vemtl')

            vemto.log.message('Lang ...')
            vemto.replaceTemplate(`/CrudTranslations.vemtl`, 'files/lang/CrudTranslations.vemtl')

            vemto.log.message('Start replace Jetstream ...')
            vemto.replaceTemplate(`${basePath}/AppLayoutJetstream.vemtl`, 'files/jetstream/AppLayoutJetstream.vemtl')
            vemto.replaceTemplate(`${basePath}/AppLayoutJetstream_MainDiv.vemtl`, 'files/jetstream/AppLayoutJetstream_MainDiv.vemtl')
            vemto.replaceTemplate(`${basePath}/AppLayoutJetstream_MainHeaderContent.vemtl`, 'files/jetstream/AppLayoutJetstream_MainHeaderContent.vemtl')
            vemto.replaceTemplate(`${basePath}/AppLayoutJetstream_ExtraBodyContent.vemtl`, 'files/jetstream/AppLayoutJetstream_ExtraBodyContent.vemtl')
            
            vemto.log.message('Start replace Index ...')
            vemto.replaceTemplate(`${basePath}/IndexView_Searchbar.vemtl`, 'files/IndexView_Searchbar.vemtl')
            vemto.replaceTemplate(`${basePath}/IndexView_Table.vemtl`, 'files/IndexView_Table.vemtl')
            vemto.replaceTemplate(`${basePath}/IndexView.vemtl`, 'files/IndexView.vemtl')
            
            vemto.log.message('Replace Edit/Create/Form ...')
            vemto.replaceTemplate(`${basePath}/EditView.vemtl`, 'files/EditView.vemtl')
            vemto.replaceTemplate(`${basePath}/CreateView.vemtl`, 'files/CreateView.vemtl')
            vemto.replaceTemplate(`${basePath}/FormInputsView.vemtl`, 'files/FormInputsView.vemtl')

            vemto.log.message('Replace form input ...')
            vemto.replaceTemplate(`${InputPath}/Checkbox.vemtl`, 'files/inputs/Checkbox.vemtl')
            vemto.replaceTemplate(`${InputPath}/Date.vemtl`, 'files/inputs/Date.vemtl')
            vemto.replaceTemplate(`${InputPath}/DateTime.vemtl`, 'files/inputs/DateTime.vemtl')
            vemto.replaceTemplate(`${InputPath}/Email.vemtl`, 'files/inputs/Email.vemtl')
            vemto.replaceTemplate(`${InputPath}/File.vemtl`, 'files/inputs/File.vemtl')
            vemto.replaceTemplate(`${InputPath}/Hidden.vemtl`, 'files/inputs/Hidden.vemtl')
            vemto.replaceTemplate(`${InputPath}/Image.vemtl`, 'files/inputs/Image.vemtl')
            vemto.replaceTemplate(`${InputPath}/Number.vemtl`, 'files/inputs/Number.vemtl')
            vemto.replaceTemplate(`${InputPath}/Select.vemtl`, 'files/inputs/Select.vemtl')
            vemto.replaceTemplate(`${InputPath}/SelectForRelationship.vemtl`, 'files/inputs/SelectForRelationship.vemtl')
            vemto.replaceTemplate(`${InputPath}/Textarea.vemtl`, 'files/inputs/Textarea.vemtl')
            vemto.replaceTemplate(`${InputPath}/Url.vemtl`, 'files/inputs/Url.vemtl')
            vemto.replaceTemplate(`${InputPath}/Text.vemtl`, 'files/inputs/Text.vemtl')
            vemto.replaceTemplate(`${InputPath}/Password.vemtl`, 'files/inputs/password.vemtl')


            
        },



        beforeCodeGenerationEnd() {
            vemto.log.message('Generating specific Theme files...')

            vemto.log.message('Navegation ...')
            vemto.renderTemplate('/files/includes/navigation-menu.vemtl', '/resources/views/layouts/navigation-menu.blade.php')
            vemto.renderTemplate('/files/includes/navigation-top.vemtl', '/resources/views/layouts/navigation-top.blade.php')
            vemto.renderTemplate(`/files/includes/breadcrumbs.vemtl`, '/resources/views/layouts/breadcrumbs.blade.php')
            vemto.renderTemplate('/files/includes/nav-link.vemtl', '/resources/views/components/nav-link.blade.php')
            
            vemto.log.message('Auth ...')
            vemto.renderTemplate('/files/includes/auth/forgot-password.vemtl', '/resources/views/auth/register.blade.php')
            vemto.renderTemplate('/files/includes/auth/login.vemtl', '/resources/views/auth/login.blade.php')
            vemto.renderTemplate('/files/includes/auth/register.vemtl', '/resources/views/auth/register.blade.php')


            vemto.renderTemplate('/files/includes/guest.vemtl', '/resources/views/layouts/guest.blade.php')
            
            
            vemto.log.message('Pages ...')

            vemto.renderTemplate('/files/dashboard.vemtl', '/resources/views/dashboard.blade.php')

            vemto.log.message('Replace components ...')
            vemto.renderTemplate(`/files/components/Basic.vemtl`, '/resources/views/components/inputs/basic.blade.php')
            vemto.renderTemplate(`/files/components/Checkbox.vemtl`, '/resources/views/components/inputs/checkbox.blade.php')
            vemto.renderTemplate(`/files/components/Date.vemtl`, '/resources/views/components/inputs/date.blade.php')
            vemto.renderTemplate(`/files/components/DateTime.vemtl`, '/resources/views/components/inputs/datetime.blade.php')
            vemto.renderTemplate(`/files/components/Email.vemtl`, '/resources/views/components/inputs/email.blade.php')
            vemto.renderTemplate(`/files/components/Group.vemtl`, '/resources/views/components/inputs/group.blade.php')
            vemto.renderTemplate(`/files/components/Hidden.vemtl`, '/resources/views/components/inputs/hidden.blade.php')
            vemto.renderTemplate(`/files/components/Number.vemtl`, '/resources/views/components/inputs/number.blade.php')
            vemto.renderTemplate(`/files/components/Password.vemtl`, '/resources/views/components/inputs/password.blade.php')
            vemto.renderTemplate(`/files/components/Select.vemtl`, '/resources/views/components/inputs/select.blade.php')
            vemto.renderTemplate(`/files/components/Text.vemtl`, '/resources/views/components/inputs/text.blade.php')
            vemto.renderTemplate(`/files/components/Textarea.vemtl`, '/resources/views/components/inputs/textarea.blade.php')
            vemto.renderTemplate(`/files/components/Url.vemtl`, '/resources/views/components/inputs/url.blade.php')
            
            vemto.renderTemplate(`/files/components/Error.vemtl`, '/resources/views/components/inputs/partials/error.blade.php')
            vemto.renderTemplate(`/files/components/Label.vemtl`, '/resources/views/components/inputs/partials/label.blade.php')
            
            vemto.renderTemplate('/files/components/Card.vemtl', '/resources/views/components/partials/card.blade.php')
            vemto.renderTemplate('/files/components/Thumbnail.vemtl', '/resources/views/components/partials/thumbnail.blade.php')
            
            vemto.renderTemplate('/files/components/Modal.vemtl', '/resources/views/components/modal.blade.php')

            vemto.renderTemplate('/files/includes/Ajax.vemtl', '/resources/views/layouts/ajax.blade.php')

            
            vemto.renderTemplate('/files/LocalizationController.vemtl', 'App/Http/Controllers/LocalizationController.php')


        },
        nodePackages(packages) {

            // Adding packages

            // Dependencies
            packages.dependencies['lodash'] = '^4.17'
            // packages.dependencies['datatables'] = '^1.10.18'
            // packages.dependencies['simple-line-icons'] = '^2.5.5'
            // packages.dependencies['flag-icons'] = 'github:lipis/flag-icon-css'


            // devDependencies
            // packages.devDependencies['@popperjs/core'] = '^4.17'
            // packages.devDependencies['bootstrap'] = '^4.17'
            // packages.devDependencies['jquery'] = '^3.6.4'
            // packages.devDependencies['sass'] = '^4.17'
            // packages.devDependencies['lodash'] = '^4.17'


            return packages
        },


        composerPackages(packages) {
            // Adding packages

            packages.require['barryvdh/laravel-debugbar'] = '^3.8'
            packages.require['yajra/laravel-datatables'] = '^10.0'
            packages.require['bootstrap-notify'] = '^3.1.3'
            // packages.require['laravel/ui']
            // vemto.executeCommand('php artisan ui bootstrap')
            
            return packages
        },

    }

}