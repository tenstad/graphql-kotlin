/*
 * Copyright 2021 Expedia, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.expediagroup.graphql.plugin.gradle.actions

import com.expediagroup.graphql.plugin.client.introspectSchema
import com.expediagroup.graphql.plugin.gradle.parameters.RetrieveSchemaParameters
import io.ktor.util.KtorExperimentalAPI
import org.gradle.workers.WorkAction

/**
 * WorkAction that is used to introspect target GraphQL server and save the resulting schema locally.
 *
 * Action is run using Gradle classloader isolation with a custom classpath that has a dependency on `graphql-kotlin-client-generator`.
 */
@Suppress("UnstableApiUsage")
abstract class IntrospectSchemaAction : WorkAction<RetrieveSchemaParameters> {

    @KtorExperimentalAPI
    override fun execute() {
        val endpoint = parameters.endpoint.get()
        val headers = parameters.headers.get()
        val timeout = parameters.timeoutConfiguration.get()
        val schemaFile = parameters.schemaFile.get()

        val schema = introspectSchema(endpoint, headers, timeout.connect, timeout.read)
        schemaFile.writeText(schema.toString())
    }
}
